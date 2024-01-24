import React, { useState } from 'react';
import axios from 'axios';
import './ProjectForm.css';

const ProjectForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/submit-project', {
        title,
        description,
        createdBy,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error submitting project:', error.message);
    }
  };

  return (
    <div className="project-form-container">
      <h1>Project Submission Form</h1>
      <label>
        Project Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Created By:
        <input type="text" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit Project</button>
    </div>
  );
};

export default ProjectForm;
