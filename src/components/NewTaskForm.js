import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = { text: details, category: category }; // newTask = setDetails + setCategory
    onTaskFormSubmit(newTask); // submit newTask to the COPY, NOT the task from the data.js
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
    <label>
      Details
      <input type="text" name="text" value={details} onChange={(e) => setDetails(e.target.value)} />
    </label>
    <label>
      Category
      <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        {/* render <option> elements for each category here */}
        {categories.map(category => (
          <option key={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
    <input type="submit" value="Add task" />
  </form>
  );
}

export default NewTaskForm;
