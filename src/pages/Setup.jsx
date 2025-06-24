import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  selectCategories,
  addCategory,
  updateCategory,
  deleteCategory
} from '../store/categorySlice';

const Setup = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const [selectedIncome, setSelectedIncome] = useState('30000-40000');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [categoryIcon, setCategoryIcon] = useState('');

  const [linkedEmail, setLinkedEmail] = useState(null);
  const [email, setEmail] = useState('');
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);

  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);

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
    if (!categoryName.trim()) return;

    if (editingCategory) {
      dispatch(updateCategory({
        id: editingCategory.id,
        name: categoryName,
        icon: categoryIcon || '📁'
      }));
    } else {
      dispatch(addCategory({
        id: Date.now(),
        name: categoryName,
        icon: categoryIcon || '📁'
      }));
    }

    closeCategoryModal();
  };

  const removeCategory = (category) => {
    if (window.confirm(`Are you sure you want to delete "${category.name}" category?`)) {
      dispatch(deleteCategory(category.id));
    }
  };

  const openAddEmailModal = () => {
    setEmail('');
    setIsEmailEditing(false);
    setIsEmailModalOpen(true);
  };

  const openEditEmailModal = () => {
    setEmail(linkedEmail);
    setIsEmailEditing(true);
    setIsEmailModalOpen(true);
  };

  const handleEmailSubmit = () => {
    if (!email.trim()) return alert('Please enter an email address');
    setLinkedEmail(email);
    alert(`Email ${isEmailEditing ? 'updated' : 'linked'} successfully!`);
    setIsEmailModalOpen(false);
  };

  const handleSaveIncome = () => {
    alert(`Income range saved: ${incomeRanges[selectedIncome]}`);
    setIsIncomeModalOpen(false);
  };

  return (
    <div className="flex flex-col px-4 gap-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-blue-600 text-lg sm:text-xl">Setup</h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
          Set your income & add more categories
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className='flex flex-col gap-4 w-full lg:w-1/2'>
          {/* Set Income Section */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md w-full h-auto space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 flex items-center gap-2">
                💰 Set Income
              </h2>
              <button
                onClick={() => setIsIncomeModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Edit Income
              </button>
            </div>
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
              <div className="text-xs sm:text-sm text-green-700 mb-1">Current Monthly Income</div>
              <div className="text-base sm:text-lg font-semibold text-green-600">
                {incomeRanges[selectedIncome]}
              </div>
            </div>
          </div>

          {/* Link Email Section */}
          <div className="flex flex-col justify-between  bg-white rounded-xl p-4 sm:p-6 shadow-md w-full h-auto">
            <div className='flex justify-between items-center'>
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">Link your email</h2>
              {linkedEmail ? (
                <button
                  onClick={openEditEmailModal}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit Email
                </button>
              ) : (
                <button
                  onClick={openAddEmailModal}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Link your Email
                </button>
              )}
            </div>
            {linkedEmail && <p className="text-sm text-gray-600">📧 Linked Email: <span className="font-medium text-gray-800">{linkedEmail}</span></p>}
          </div>
        </div>


        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md w-full lg:w-1/2 ">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 flex items-center gap-2">📂 Expense Categories</h2>
            <button
              onClick={openAddCategoryModal}
              className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              + Add
            </button>
          </div>
          <div className="space-y-4  max-h-50 overflow-y-auto pr-1">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                    {category.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{category.name}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => openEditCategoryModal(category)}
                    className="text-blue-500 hover:text-blue-700 text-lg"
                  >✏️</button>
                  <button
                    onClick={() => removeCategory(category)}
                    className="text-red-500 hover:text-red-700 text-lg"
                  >🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-xl font-bold text-gray-900">
                {editingCategory ? 'Edit Category' : 'Add Category'}
              </h3>
              <button
                onClick={closeCategoryModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >×</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                <input
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter category name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Icon</label>
                <input
                  type="text"
                  value={categoryIcon}
                  onChange={(e) => setCategoryIcon(e.target.value)}
                  placeholder="Choose an emoji (e.g., 🎵)"
                  maxLength={2}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCategorySubmit}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Category
              </button>
              <button
                onClick={closeCategoryModal}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-xl font-bold text-gray-900">
                {isEmailEditing ? 'Edit Email' : 'Link Email'}
              </h3>
              <button
                onClick={() => setIsEmailModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >×</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <input
                  type='checkbox'
                  className='mt-6 mr-2'
                />
                <label>Accept terms and conditions</label>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleEmailSubmit}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isEmailEditing ? 'Update Email' : 'Verify Email'}
              </button>
              <button
                onClick={() => setIsEmailModalOpen(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Income Modal */}
      {isIncomeModalOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-xl font-bold text-gray-900">Edit Income</h3>
              <button
                onClick={() => setIsIncomeModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >×</button>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Income Range</label>
              <select
                value={selectedIncome}
                onChange={handleIncomeChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg text-base bg-white focus:outline-none focus:border-blue-500"
              >
                {Object.entries(incomeRanges).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveIncome}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Income
              </button>
              <button
                onClick={() => setIsIncomeModalOpen(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Setup;
