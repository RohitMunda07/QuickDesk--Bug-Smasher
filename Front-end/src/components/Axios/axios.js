import axios from 'axios';

// Correct base URL with colon
const baseUrl = "https://localhost:5123";

// Create axios instance with configuration
const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Request interceptor - runs before every request
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log('Request sent:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - runs after every response
apiClient.interceptors.response.use(
  (response) => {
    console.log('Response received:', response);
    return response;
  },
  (error) => {
    // Handle common error responses
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    } else if (error.response?.status === 500) {
      console.error('Server error occurred');
    }
    
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

// GET Method
const getMethod = async (endpoint = '', params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    console.log('GET Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('GET Error:', error.response?.data || error.message);
    throw error;
  }
};

// POST Method
const postMethod = async (endpoint = '', data = {}) => {
  try {
    const response = await apiClient.post(endpoint, data);
    console.log('POST Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('POST Error:', error.response?.data || error.message);
    throw error;
  }
};

// PUT Method (complete update)
const putMethod = async (endpoint = '', data = {}) => {
  try {
    const response = await apiClient.put(endpoint, data);
    console.log('PUT Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('PUT Error:', error.response?.data || error.message);
    throw error;
  }
};

// PATCH Method (partial update) - Fixed from your code
const patchMethod = async (endpoint = '', data = {}) => {
  try {
    const response = await apiClient.patch(endpoint, data); // Fixed: was axios.post
    console.log('PATCH Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('PATCH Error:', error.response?.data || error.message);
    throw error;
  }
};

// DELETE Method
const deleteMethod = async (endpoint = '') => {
  try {
    const response = await apiClient.delete(endpoint);
    console.log('DELETE Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('DELETE Error:', error.response?.data || error.message);
    throw error;
  }
};

// Utility function for file uploads
const uploadFile = async (endpoint = '', formData) => {
  try {
    const response = await apiClient.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(`Upload Progress: ${progress}%`);
      },
    });
    console.log('Upload Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Upload Error:', error.response?.data || error.message);
    throw error;
  }
};

// Export methods
export {
  getMethod,
  postMethod,
  putMethod,
  patchMethod,
  deleteMethod,
  uploadFile,
  apiClient // Export the configured axios instance
};

// Example usage:
/*

// GET request
const fetchUsers = async () => {
  try {
    const users = await getMethod('/users');
    console.log(users);
  } catch (error) {
    // Handle error
  }
};

// POST request
const createUser = async (userData) => {
  try {
    const newUser = await postMethod('/users', userData);
    console.log(newUser);
  } catch (error) {
    // Handle error
  }
};

// PUT request (complete update)
const updateUser = async (userId, userData) => {
  try {
    const updatedUser = await putMethod(`/users/${userId}`, userData);
    console.log(updatedUser);
  } catch (error) {
    // Handle error
  }
};

// PATCH request (partial update)
const updateUserPartial = async (userId, partialData) => {
  try {
    const updatedUser = await patchMethod(`/users/${userId}`, partialData);
    console.log(updatedUser);
  } catch (error) {
    // Handle error
  }
};

// DELETE request
const removeUser = async (userId) => {
  try {
    await deleteMethod(`/users/${userId}`);
    console.log('User deleted successfully');
  } catch (error) {
    // Handle error
  }
};

// File upload
const uploadProfilePicture = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const result = await uploadFile('/upload/profile', formData);
    console.log(result);
  } catch (error) {
    // Handle error
  }
};

*/