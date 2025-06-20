import React, { useState } from 'react'

const useDashboardData = () => {
    const data = [
        { name: 'Food', value: 15840, color: '#FFB6C1', percent: 35 },
        { name: 'Transport', value: 15840, color: '#8B0000', percent: 20 },
        { name: 'Shopping', value: 15840, color: '#FFD700', percent: 18 },
        { name: 'Petrol', value: 15840, color: '#00C49F', percent: 15 },
        { name: 'Others', value: 15840, color: '#9370DB', percent: 12 },
    ];
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return { data, startDate, setStartDate, endDate, setEndDate }
}

export default useDashboardData
