import React from "react";

const Form = () => (
  <section className="form_section">
    <div className="section_header">
      <div className="container">
        <h1 className="heading">Challenge Details</h1>
      </div>
    </div>
    <div className="section_form">
      <div className="container">
        <div className="form_inputs">
          <div className="form_input">
            <label className="label" htmlFor="name">
              Challenge Name
              <input type="text" id="name" name="name" />
            </label>
          </div>
          <div className="form_input">
            <label className="label" htmlFor="name">
              Start Date
              <input type="datetime-local" id="startDate" name="startDate" />
            </label>
          </div>
          <div className="form_input">
            <label className="label" htmlFor="name">
              End Date
              <input type="datetime-local" id="endDate" name="endDate" />
            </label>
          </div>
        </div>
        <div className="form_textarea">
          <label className="label" htmlFor="description">
            Description
            <textarea id="description" name="description" />
          </label>
        </div>
        <div className="form_upload">
          <p className="label">Image</p>
          <label htmlFor="upload">
            Upload
            <input type="file" id="upload" name="upload" accept="image/png, image/jpeg" />
          </label>
        </div>
        <div className="form_select">
          <label className="label" htmlFor="level">
            Level Type
            <select id="level" name="level">
              <option value="easy" selected>Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>
        <button className="form_action" type="button">
          Create Challenge
        </button>
      </div>
    </div>
  </section>
);

export default Form;
