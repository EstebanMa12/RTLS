/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2'

const MovementChart = ({ data }) => {
    const chartData = {
        labels: data.map((value, index) => index),
        datasets: [
            {
                label: 'Movement',
                data: data.map(value => value.value),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    }

    return (
        <div>
            <Line data={chartData} />
        </div>
    )
}

export default MovementChart