/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {useState} from "react"
const EditComponent = ({ currentState, onSave, onCancel }) => {
    const [newValue, setNewValue] = useState(currentState);
  
    const handleSave = () => {
      onSave(newValue);
    };
  
    return (
      <Dialog open={true} onOpenChange={onCancel}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit State</DialogTitle>
            <DialogDescription>
              Haga cambios en el estado que desee
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="state" className="text-right">
                State
              </Label>
              <Input
                id="state"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSave}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default EditComponent;