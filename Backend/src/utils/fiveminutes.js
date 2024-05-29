const calculateFiveMinuteIntervals = (values, startOfDay, endOfDay, button = false) => {
    const fiveMinuteIntervals = [];
    let currentIntervalStart = new Date(startOfDay);
    let currentIntervalEnd = new Date(startOfDay);
    currentIntervalEnd.setMinutes(currentIntervalEnd.getMinutes() + 5);
    while (currentIntervalStart < endOfDay) {
        const intervalValues = values.filter((entry) => {
            return entry.date >= currentIntervalStart && entry.date < currentIntervalEnd;
        });

        let intervalActiveTime = 0;
        let intervalInactiveTime = 0;

        intervalValues.forEach((entry) => {
            if (button) {
                if (entry.state) {
                    intervalActiveTime += 20;
                } else {
                    intervalInactiveTime += 20;
                }
            } else {
                if (entry.movement) {
                    intervalActiveTime += 20;
                } else {
                    intervalInactiveTime += 20;
                }
            }
        });

        const intervalTotalTime = (intervalActiveTime + intervalInactiveTime) / 60;
        const intervalActivityPercentage = intervalTotalTime > 0 ? (intervalActiveTime / (intervalActiveTime + intervalInactiveTime)) * 100
            : 0;
        if (intervalActivityPercentage > 0) {
            fiveMinuteIntervals.push({
                start: currentIntervalStart.toISOString(),
                end: currentIntervalEnd.toISOString(),
                activeTime: intervalActiveTime / 60,
                inactiveTime: intervalInactiveTime / 60,
                activityPercentage: intervalActivityPercentage
            });
        }

        currentIntervalStart = new Date(currentIntervalEnd);
        currentIntervalEnd.setMinutes(currentIntervalEnd.getMinutes() + 5);
    }
    return fiveMinuteIntervals;
}

const calculateFiveMinuteIntervalsFromList = (values, button = false) => {
    if (values.length === 0) {
        return [];
    }
    const startOfDay = values[0].date;
    const endOfDay = values[values.length - 1].date;
    return calculateFiveMinuteIntervals(values, startOfDay, endOfDay, button);
}

module.exports = {
    calculateFiveMinuteIntervals,
    calculateFiveMinuteIntervalsFromList
}