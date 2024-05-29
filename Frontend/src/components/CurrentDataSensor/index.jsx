/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
const CurrentDataSensor = ()=>{
    const [labels, setLabels] = useState(null)
    const [activeTimeData, setActiveTimeData] = useState(null)
    const [inactiveTimeData, setInactiveTimeData] = useState(null)
    const [currentActiveTime, setCurrentActiveTime] = useState(null)
    const [currentInactiveTime, setCurrentInactiveTime] = useState(null)

    
    const date = new Date();
    date.setHours(date.getHours() - 5);
    // Today date
    const currentDate = date.toISOString().slice(0, 10);
    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_API_URL}/sensor/report/${currentDate}/`)
          .then((res) => {
            const dailyStats = res.data.dailyStats;
            const currentStats = res.data.currentStats;
            const dailyData = res.data.fiveMinuteIntervals;
            const labels = dailyData.map((data) => data.start.slice(11,16));
    
            const activeTimeData = dailyData.map((data) => {
                return data.activeTime;
                });
    
            const inactiveTimeData = dailyData.map((data) => {
                return data.inactiveTime;
                });
    
            setLabels(labels);
            setActiveTimeData(activeTimeData);
            setInactiveTimeData(inactiveTimeData);
            setCurrentActiveTime(currentStats.activeTime);
            setCurrentInactiveTime(currentStats.inactiveTime);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
    return (
        <div className="current-data-sensor">
            <h3>Current Data Sensor</h3>
            <div className="current-data-sensor__content">
                <div className="current-data-sensor__content__item">
                    <div className="current-data-sensor__content__item__title">
                        <h4>Temperature</h4>
                    </div>
                    <div className="current-data-sensor__content__item__value">
                        <p>25°C</p>
                    </div>
                </div>
                <div className="current-data-sensor__content__item">
                    <div className="current-data-sensor__content__item__title">
                        <h4>Humidity</h4>
                    </div>
                    <div className="current-data-sensor__content__item__value">
                        <p>70%</p>
                    </div>
                </div>
                <div className="current-data-sensor__content__item">
                    <div className="current-data-sensor__content__item__title">
                        <h4>Light</h4>
                    </div>
                    <div className="current-data-sensor__content__item__value">
                        <p>50%</p>
                    </div>
                </div>
                <div className="current-data-sensor__content__item">
                    <div className="current-data-sensor__content__item__title">
                        <h4>Soil Moisture</h4>
                    </div>
                    <div className="current-data-sensor__content__item__value">
                        <p>30%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentDataSensor;