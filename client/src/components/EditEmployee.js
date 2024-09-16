import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserDetailDisplay = ({ user, onSave, onDelete }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditable(false);
  };

  return (
    <div
      className={`d-flex align-items-center p-3 mb-3 border rounded shadow-sm ${
        isEditable ? "bg-success text-white" : "bg-secondary text-white"
      }`}
    >
      <img
        src={formData.image}
        alt="User"
        className="w-25 h-25 rounded-circle me-3"
      />
      <div className="flex-grow-1">
        <div className="mb-2">
          <input
            type="text"
            name="name"
            className={`form-control ${
              isEditable ? "border-primary" : "border-0 bg-transparent"
            }`}
            value={formData.name}
            onChange={handleChange}
            readOnly={!isEditable}
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            name="email"
            className={`form-control ${
              isEditable ? "border-primary" : "border-0 bg-transparent"
            }`}
            value={formData.email}
            onChange={handleChange}
            readOnly={!isEditable}
          />
        </div>
        <div className="mb-2">
          <input
            type="tel"
            name="mobile"
            className={`form-control ${
              isEditable ? "border-primary" : "border-0 bg-transparent"
            }`}
            value={formData.mobile}
            onChange={handleChange}
            readOnly={!isEditable}
          />
        </div>
        <div className="mb-2">
          <select
            name="designation"
            className={`form-select ${
              isEditable ? "border-primary" : "border-0 bg-transparent"
            }`}
            value={formData.designation}
            onChange={handleChange}
            disabled={!isEditable}
          >
            <option value="hr">HR</option>
            <option value="sales">Sales</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <div className="mb-2">
          <select
            name="course"
            className={`form-select ${
              isEditable ? "border-primary" : "border-0 bg-transparent"
            }`}
            value={formData.course}
            onChange={handleChange}
            disabled={!isEditable}
          >
            <option value="mca">MCA</option>
            <option value="bca">BCA</option>
            <option value="bsc">BSC</option>
          </select>
        </div>
        <div className="mb-2">
          <select
            name="gender"
            className={`form-select ${
              isEditable ? "border-primary" : "border-0 bg-transparent"
            }`}
            value={formData.gender}
            onChange={handleChange}
            disabled={!isEditable}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <button
        className="btn btn-outline-light me-2"
        onClick={() => {
          if (isEditable) {
            handleSave();
          } else {
            setIsEditable(true);
          }
        }}
      >
        {isEditable ? "Save" : "Edit"}
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => onDelete(user.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default UserDetailDisplay;
