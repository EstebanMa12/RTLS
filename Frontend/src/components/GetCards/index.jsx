/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { formatDistanceToNow, parseISO } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import EditComponent from "@/components/EditComponent";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

const GetCards = ({ values, type, fetchData }) => {
    const [images, setImages] = useState({});
    const [selectedAction, setSelectedAction] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
  
    const handleAction = async (id, action) => {
      try {
        if (action === 'delete') {
          const endpoint =
            type === 'sensor' ? `/sensor/delete/${id}` : `/sensor/button/${id}`;
          handleDelete(id, endpoint);
        } else if (action === 'edit') {
          setEditingItem(id); // Set the item to be edited
        }
        fetchData(); // Refresh the data after the action
      } catch (error) {
        console.error('Error performing action:', error);
      }
    };
  
    const handleSave = async (newValue) => {
      try {
        const endpoint =
          type === 'sensor'
            ? `/sensor/update/${editingItem}`
            : `/sensor/button/${editingItem}`;
        const data =
          type === 'sensor'
            ? { movement: newValue === 'true' }
            : { state: newValue === 'true' };
        await axios.patch(`${import.meta.env.VITE_API_URL}${endpoint}`, data);
        fetchData(); // Refresh the data after saving
        setEditingItem(null); // Clear the editing item
      } catch (error) {
        console.error('Error saving value:', error);
      }
    };

    const handleCancel = () => {
        setEditingItem(null);
      };
  
    useEffect(() => {
      const getImages = async () => {
        const response = await import('../../assets/images.json');
        setImages(response.default);
      };
      getImages();
    }, []);
  
    const handleImages = (value, type) => {
      if (type === 'sensor') {
        return value === true ? images.movement : images.quiet;
      } else {
        return value === true ? images.on : images.off;
      }
    };
  
    const handleDelete = async (id, endpoint) => {
      try {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success'
            });
            await axios.delete(`${import.meta.env.VITE_API_URL}${endpoint}`);
            fetchData(); // Refresh the data after deletion
          }
        });
      } catch (error) {
        console.error('Error deleting value:', error);
      }
    };
  
    return (
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>
              Last Values of {type === 'sensor' ? 'Sensor' : 'Button'}{' '}
            </CardTitle>
            <CardDescription>
              This is the last values of the{' '}
              {type === 'sensor' ? 'movement Sensor' : 'Button'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {values.map((value) => (
              <div
                className="flex space-y-1.5 items-center justify-between gap-4 w-full my-6"
                key={value._id}
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    {type === 'sensor' ? (
                      <AvatarImage
                        src={`${handleImages(value.movement, 'sensor')}`}
                      />
                    ) : (
                      <AvatarImage
                        src={`${handleImages(value.state, 'button')}`}
                      />
                    )}
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    {type === 'sensor' ? (
                      <h3
                        className="
                          text-lg
                          font-semibold
                          "
                      >
                        State: {value.movement === true ? 'activo' : 'inactivo'}
                      </h3>
                    ) : (
                      <h3
                        className="
                      text-lg
                      font-semibold
                      "
                      >
                        State: {value.state === true ? 'activo' : 'inactivo'}
                      </h3>
                    )}
                    <h5
                      className="
                          text-sm
                          text-gray-500
                      "
                    >
                      {' '}
                      {formatDistanceToNow(parseISO(value.date))} ago
                    </h5>
                  </div>
                </div>
                <div className="md:w-1/5">
                  <Select
                    value={selectedAction}
                    onValueChange={(action) => handleAction(value._id, action)}
                  >
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Action" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="edit">Edit</SelectItem>
                      <SelectItem value="delete">Delete</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        {editingItem && (
          <EditComponent
            currentState={
              type === 'sensor'
                ? values.find((value) => value._id === editingItem).movement
                : values.find((value) => value._id === editingItem).state
            }
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
    );
  };
  
  export default GetCards;
