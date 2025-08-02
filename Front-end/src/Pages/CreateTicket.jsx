import React, { useState } from 'react';

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    question: '',
    description: '',
    tags: []
  });

  const [tagInput, setTagInput] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle tag input
  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  // Add tag when Enter is pressed or comma is typed
  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  // Add tag to the list
  const addTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !formData.tags.includes(trimmedTag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, trimmedTag]
      }));
      setTagInput('');
    }
  };

  // Remove tag from the list
  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!formData.question.trim()) {
      alert('Please enter a question');
      return;
    }

    setIsPosting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Post data:', formData);
      alert('Post created successfully!');

      // Reset form
      setFormData({
        question: '',
        description: '',
        tags: []
      });
      setTagInput('');

    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="min-h-screen rounded-4xl text-black p-6">

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">›</span>
          Ask Your Question
        </h1>

        {/* Form Container */}
        <div className="rounded-lg p-8 border bg-[whitesmoke]">
          <div className="space-y-6">
            {/* Question Field */}
            <div>
              <label className="block text-lg font-medium mb-3">
                Question
              </label>
              <input
                type="text"
                name="question"
                value={formData.question}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-400 rounded-lg 
                         focus:outline-none transition-colors
                         placeholder-gray-400"
                placeholder="Enter your question here..."
              />
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-lg font-medium mb-3">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-400 rounded-lg 
                         focus:outline-none transition-colors
                         placeholder-gray-400 resize-vertical"
                placeholder="Provide more details about your question..."
              />
            </div>

            {/* Tags Field */}
            <div>
              <label className="block text-lg font-medium mb-3">
                Tags
              </label>

              {/* Tag Input */}
              <div className="relative">
                <input
                  type="text"
                  value={tagInput}
                  onChange={handleTagInputChange}
                  onKeyPress={handleTagKeyPress}
                  onBlur={addTag}
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-400 rounded-lg 
                           focus:outline-none transition-colors
                           placeholder-gray-400"
                  placeholder="Type tags and press Enter or comma to add..."
                />
              </div>

              {/* Display User Tags */}
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-purple-600 
                               rounded-full text-sm font-medium"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-purple-200 hover transition-colors"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isPosting || !formData.question.trim()}
                className="px-8 py-3 text-white bg-blue-700 hover:bg-blue-600 disabled:bg-gray-500 
                         disabled:!cursor-not-allowed font-medium rounded-lg 
                         transition-colors duration-200 flex items-center space-x-2"
              >
                {isPosting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent 
                                  rounded-full animate-spin"></div>
                    <span>Posting...</span>
                  </>
                ) : (
                  <span>Post</span>
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateTicket;