import React, { useState } from 'react'

const useSetupData = () => {
    const [selectedIncome, setSelectedIncome] = useState('30000-40000');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [categoryName, setCategoryName] = useState('');
    const [categoryIcon, setCategoryIcon] = useState('');

    const [categories, setCategories] = useState([
        { id: 1, name: 'Food & Dining', icon: '🍕', transactions: 24 },
        { id: 2, name: 'Transportation', icon: '🚗', transactions: 18 },
        { id: 3, name: 'Shopping', icon: '🛍️', transactions: 12 },
        { id: 4, name: 'Entertainment', icon: '🎬', transactions: 8 },
        { id: 5, name: 'Bills & Utilities', icon: '📄', transactions: 6 },
        { id: 6, name: 'Healthcare', icon: '🏥', transactions: 3 }
    ]);

    const incomeRanges = {
        '20000-30000': '₹25,000',
        '30000-40000': '₹35,000',
        '40000-50000': '₹45,000',
        '50000-60000': '₹55,000',
        '60000-70000': '₹65,000',
        '70000-80000': '₹75,000',
        '80000-100000': '₹90,000',
        '100000+': '₹1,00,000+'
    };

    const handleIncomeChange = (e) => setSelectedIncome(e.target.value);

    const openAddCategoryModal = () => {
        setCategoryName('');
        setCategoryIcon('');
        setEditingCategory(null);
        setIsModalOpen(true);
    };

    const openEditCategoryModal = (category) => {
        setCategoryName(category.name);
        setCategoryIcon(category.icon);
        setEditingCategory(category);
        setIsModalOpen(true);
    };

    const closeCategoryModal = () => {
        setIsModalOpen(false);
        setEditingCategory(null);
        setCategoryName('');
        setCategoryIcon('');
    };

    const handleCategorySubmit = () => {
        if (!categoryName.trim()) return alert('Please enter a category name');

        if (editingCategory) {
            setCategories(categories.map(cat =>
                cat.id === editingCategory.id
                    ? { ...cat, name: categoryName, icon: categoryIcon || '📁' }
                    : cat
            ));
            alert(`"${categoryName}" category updated successfully!`);
        } else {
            const newCategory = {
                id: Math.max(...categories.map(c => c.id)) + 1,
                name: categoryName,
                icon: categoryIcon || '📁',
                transactions: 0
            };
            setCategories([...categories, newCategory]);
            alert(`"${categoryName}" category added successfully!`);
        }

        closeCategoryModal();
    };

    const deleteCategory = (categoryToDelete) => {
        if (window.confirm(`Are you sure you want to delete "${categoryToDelete.name}" category?`)) {
            setCategories(categories.filter(cat => cat.id !== categoryToDelete.id));
            alert(`"${categoryToDelete.name}" category deleted successfully!`);
        }
    };

    const handleSave = () => alert('Setup saved successfully!');
    return { selectedIncome, setSelectedIncome, isModalOpen, setIsModalOpen, editingCategory, setEditingCategory, categoryName, setCategoryName, categoryIcon, setCategoryIcon, categories, setCategories, incomeRanges, handleCategorySubmit, handleIncomeChange, handleSave, deleteCategory, openAddCategoryModal, openEditCategoryModal, closeCategoryModal }
}

export default useSetupData
