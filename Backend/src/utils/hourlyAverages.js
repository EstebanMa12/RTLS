const calculateHourlyAverages = (values) => {
    try {

        if (!values.length) {
            return { averageActiveTime: 0, averageInactiveTime: 0 };
        }

        const hourlyStats = {};
        values.forEach((entry) => {
            const hour = new Date(entry.date).toISOString().substring(0, 13); // Extract hour part

            if (!hourlyStats[hour]) {
                hourlyStats[hour] = { activeTime: 0, inactiveTime: 0, count: 0 };
            }

            if (entry.movement) {
                hourlyStats[hour].activeTime += 20;
            } else {
                hourlyStats[hour].inactiveTime += 20;
            }

            hourlyStats[hour].count += 1;
        });

        let totalActiveTime = 0;
        let totalInactiveTime = 0;
        let totalHours = 0;

        for (const hour in hourlyStats) {
            totalActiveTime += hourlyStats[hour].activeTime;
            totalInactiveTime += hourlyStats[hour].inactiveTime;
            totalHours += 1;
        }

        const averageActiveTime = totalActiveTime / (totalHours * 60);
        const averageInactiveTime = totalInactiveTime / (totalHours * 60);

        return { averageActiveTime, averageInactiveTime };
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
};


module.exports = {
    calculateHourlyAverages
}