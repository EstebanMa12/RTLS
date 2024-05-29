/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useEffect, useState } from 'react'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ManIcon from '@mui/icons-material/Man';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const LastValues = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
        y: {
            beginAtZero: true,
        },
        },
    };
    const [activeTimeData, setActiveTimeData] = useState([]);
    const [inactiveTimeData, setInactiveTimeData] = useState([]);
    const [labels, setLabels] = useState([]);
    useEffect(() => {
        axios
        .get(
            `${
            import.meta.env.VITE_API_URL
            }/sensor/`
        )
        .then((res) => {
            const {values, buttons} = res.data;
            console.log(values);
            console.log(buttons);

    
            setLabels(labels);

        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);
    
    return (
        <>
        <Card>
            <CardHeader>
                <CardTitle>
                    Last Values
                </CardTitle>
            </CardHeader>
            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        </Card>

        </>
    );
    }

export default LastValues