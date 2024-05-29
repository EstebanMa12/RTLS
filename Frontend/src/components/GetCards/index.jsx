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

const GetCards = ({ values, type, fetchData }) => {
  const [images, setImages] = useState({});

  const handleAction = async (id, action) => {
    try {
      if (action === "delete") {
        const endpoint =
          type === "sensor" ? `/sensor/delete/${id}` : `/sensor/button/${id}`;
        await axios.delete(`${import.meta.env.VITE_API_URL}${endpoint}`);
      } else if (action === "edit") {
        const newValue = prompt("Enter new state (true/false):");
        const endpoint =
          type === "sensor" ? `/sensor/update/${id}` : `/sensor/button/${id}`;
        await axios.patch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
          state: newValue === "true",
        });
      }
      fetchData(); // Refresh the data after the action
    } catch (error) {
      console.error("Error performing action:", error);
    }
  };

  useEffect(() => {
    const getImages = async () => {
      const response = await import("../../assets/images.json");
      setImages(response.default);
    };
    getImages();
  }, []);

  const handleImages = (value, type) => {
    if (type === "sensor") {
      return value === true ? images.movement : images.quiet;
    } else {
      return value === true ? images.on : images.off;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Last Values of {type == "sensor" ? `Sensor` : `Button`}{" "}
        </CardTitle>
        <CardDescription>
          This is the last values of the{" "}
          {type == "sensor" ? `movement Sensor` : `Button`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {values.map((value) => (
          <div
            className="flex space-y-1.5 items-center justify-between gap-4 w-full my-6"
            key={value.id}
          >
            <div className="flex items-center gap-4">
              <Avatar>
                {type == "sensor" ? (
                  <AvatarImage
                    src={`${handleImages(value.movement, "sensor")}`}
                  />
                ) : (
                  <AvatarImage src={`${handleImages(value.state, "button")}`} />
                )}
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                {type == "sensor" ? (
                  <h3
                    className="
                    text-lg
                    font-semibold
                    "
                  >
                    State: {value.movement == true ? `activo` : `inactivo`}
                  </h3>
                ) : (
                  <h3
                    className="
                text-lg
                font-semibold
                "
                  >
                    State: {value.movement == true ? `activo` : `inactivo`}
                  </h3>
                )}
                <h5
                  className="
                    text-sm
                    text-gray-500
                "
                >
                  {" "}
                  {formatDistanceToNow(parseISO(value.date))} ago
                </h5>
              </div>
            </div>
            <div className="md:w-1/5">
              <Select
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
  );
};

export default GetCards;
