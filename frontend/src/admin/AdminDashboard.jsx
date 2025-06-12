import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/admin/api`;

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [label, setLabel] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE_URL}/blogs`);
      setBlogs(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching blogs: ", err);
      setError("Failed to fetch blogs. Please try again.");
      setLoading(false);
      toast.error("Failed to fetch blogs.");
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setImagePreview("");
    }
  };

  const handleAddBlog = async () => {
    if (!title.trim() || !description.trim() || !label.trim() || !imageFile) {
      toast.warn("Please fill in all required fields, including the image.");
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("label_text", label);
      formData.append("description", description);
      formData.append("image", imageFile);

      await axios.post(`${API_BASE_URL}/blogs`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      closeModal();
      fetchBlogs();
      toast.success("Blog added successfully!");
    } catch (err) {
      console.error("Error adding blog: ", err);
      toast.error("Failed to add blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditBlog = (id) => {
    const blog = blogs.find((b) => b.id === id);
    if (blog) {
      setTitle(blog.title || "");
      setLabel(blog.label_text || "");
      setDescription(blog.description || "");
      setImagePreview(blog.image_url || "");
      setImageFile(null);
      setEditingId(id);
      openModal();
    }
  };

  const handleUpdateBlog = async () => {
    if (!editingId) return;
    if (!title.trim() || !description.trim() || !label.trim()) {
      toast.warn("Please fill in all required fields.");
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("label_text", label);
      formData.append("description", description);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.put(`${API_BASE_URL}/blogs/${editingId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      closeModal();
      fetchBlogs();
      toast.success("Blog updated successfully!");
    } catch (err) {
      console.error("Error updating blog: ", err);
      toast.error("Failed to update blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      setLoading(true);
      await axios.delete(`${API_BASE_URL}/blogs/${id}`);
      fetchBlogs();
      toast.success("Blog deleted successfully!");
    } catch (err) {
      console.error("Error deleting blog: ", err);
      toast.error("Failed to delete blog.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setLabel("");
    setDescription("");
    setImageFile(null);
    setImagePreview("");
    setEditingId(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsSidebarOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleAddNewBlogClick = () => {
    setEditingId(null);
    openModal();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
    toast.info("Logged out successfully!");
  };

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:w-72`}
      >
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="flex-grow">
          <ul>
            <li className="p-4 hover:bg-gray-100 transition-colors">
              <Link
                to="/admin/dashboard"
                className="block text-gray-700 font-medium hover:text-blue-600"
              >
                Dashboard
              </Link>
            </li>
            <li className="p-4 bg-blue-50 text-blue-600 font-semibold">
              <Link to="/admin/blogs" className="block">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-50 bg-white shadow-sm p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Blogs Management</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 flex-1">
          {/* Header for larger screens */}
          <div className="hidden lg:flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Blogs Management</h1>
            <div className="flex gap-3">
              <button
                onClick={fetchBlogs}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Refreshing..." : "Refresh Data"}
              </button>
              <button
                onClick={handleAddNewBlogClick}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Add New Blog
              </button>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="lg:hidden flex gap-3 mb-6">
            <button
              onClick={fetchBlogs}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
            <button
              onClick={handleAddNewBlogClick}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Add Blog
            </button>
          </div>

          {/* Loading and Error States */}
          {loading && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-gray-600 mt-2">Loading blogs...</p>
            </div>
          )}
          {error && <p className="text-red-500 text-center py-4">{error}</p>}

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
              <div className="bg-white rounded-xl p-6 w-full max-w-md sm:max-w-lg shadow-2xl">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  {editingId ? "Edit Blog" : "Add New Blog"}
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="modal-label" className="block text-sm font-medium text-gray-700">
                      Label
                    </label>
                    <input
                      type="text"
                      id="modal-label"
                      placeholder="Enter label"
                      className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      id="modal-title"
                      placeholder="Enter title"
                      className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modal-description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="modal-description"
                      placeholder="Enter description"
                      className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-image" className="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <input
                      type="file"
                      id="modal-image"
                      accept="image/*"
                      className="mt-1 w-full p-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      onChange={handleFileChange}
                    />
                    {imagePreview && (
                      <div className="mt-3">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={closeModal}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={editingId ? handleUpdateBlog : handleAddBlog}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading
                      ? editingId
                        ? "Updating..."
                        : "Adding..."
                      : editingId
                      ? "Update Blog"
                      : "Add Blog"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Blog List */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Label
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">
                      Description
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">
                      Date
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4">
                        {blog.image_url && (
                          <img
                            src={blog.image_url}
                            alt={blog.title}
                            className="w-12 h-12 rounded-full object-cover border border-gray-200"
                          />
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{blog.title}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{blog.label_text}</td>
                      <td className="px-4 py-4 text-sm text-gray-600 hidden sm:table-cell">
                        {blog.description.substring(0, 50)}...
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 hidden md:table-cell">
                        {new Date(blog.created_at || Date.now()).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 text-right text-sm space-x-2">
                        <button
                          onClick={() => handleEditBlog(blog.id)}
                          className="text-blue-500 hover:text-blue-600 font-medium"
                          disabled={loading}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(blog.id)}
                          className="text-red-500 hover:text-red-600 font-medium"
                          disabled={loading}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;