import React, { useState } from 'react'

const useExpenseData = () => {
    const [expenses, setExpenses] = useState([
        {
            id: 1,
            title: 'Petrol',
            category: 'Petrol',
            paymentMethod: 'Credit Card',
            amount: 400,
            date: '12/06/2025',
            time: '6:30 pm'
        },
        {
            id: 2,
            title: 'Swiggy',
            category: 'Food',
            paymentMethod: 'UPI',
            amount: 600,
            date: '12/06/2025',
            time: '6:30 pm'
        },
        {
            id: 3,
            title: 'Uber',
            category: 'Travel',
            paymentMethod: 'Cash',
            amount: 100,
            date: '12/06/2025',
            time: '6:30 pm'
        }
    ]);

    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [selectedDate, setSelectedDate] = useState('Date');
    const [showAddForm, setShowAddForm] = useState(false);
    const [newExpense, setNewExpense] = useState({
        title: '',
        category: '',
        paymentMethod: '',
        amount: '',
        date: '',
        time: ''
    });

    // Chart data based on expenses over time
    const chartData = [
        { date: '2nd Jan', amount: 500 },
        { date: '3rd Jan', amount: 200 },
        { date: '4th Jan', amount: 150 },
        { date: '5th Jan', amount: 250 },
        { date: '6th Jan', amount: 180 },
        { date: '7th Jan', amount: 650 },
        { date: '8th Jan', amount: 480 },
        { date: '9th Jan', amount: 320 },
        { date: '10th Jan', amount: 750 },
        { date: '11th Jan', amount: 820 },
        { date: '12th Jan', amount: 880 },
        { date: '13th Jan', amount: 650 },
        { date: '14th Jan', amount: 300 },
        { date: '15th Jan', amount: 450 },
        { date: '16th Feb', amount: 680 },
        { date: '17th Feb', amount: 250 },
        { date: '18th Feb', amount: 720 },
        { date: '19th Feb', amount: 480 }
    ];

    const categories = ['All Categories', 'Shopping', 'Travel', 'Food', 'Utilities', 'Health', 'Petrol'];
    const paymentMethods = ['Credit Card', 'UPI', 'Cash'];

    const handleAddExpense = () => {
        if (newExpense.title && newExpense.category && newExpense.amount) {
            const expense = {
                id: expenses.length + 1,
                title: newExpense.title,
                category: newExpense.category,
                paymentMethod: newExpense.paymentMethod || 'Cash',
                amount: -Math.abs(parseFloat(newExpense.amount)),
                date: newExpense.date || new Date().toLocaleDateString('en-GB'),
                time: newExpense.time || new Date().toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                })
            };
            setExpenses([...expenses, expense]);
            setNewExpense({
                title: '',
                category: '',
                paymentMethod: '',
                amount: '',
                date: '',
                time: ''
            });
            setShowAddForm(false);
        }
    };

    const handleDeleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const filteredExpenses = expenses.filter(expense =>
        selectedCategory === 'All Categories' || expense.category === selectedCategory
    );
    return { expenses, setExpenses, selectedCategory, setSelectedCategory, selectedDate, setSelectedDate, showAddForm, setShowAddForm, newExpense, setNewExpense, chartData, categories, paymentMethods, handleAddExpense, handleDeleteExpense, filteredExpenses }
}

export default useExpenseData
