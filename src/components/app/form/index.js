import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUserContext } from "../../../context/userContext";

const Form = () => {
  const navigate = useNavigate();
  const { setChallenges } = useUserContext();
  const [formData, setFormData] = useState({
    title: "Data Sprint 72 - Butterfly Identification",
    startDate: "2022-10-14T11:18",
    endDate: "2022-10-15T11:18",
    description: "Identify the class to which each butterfly belongs to",
    level: "easy",
  });
  const [image, setImage] = useState("");
  const [isUploaded, setUploaded] = useState(false);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const onUploadHandler = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
        setUploaded(true);
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const id = uuid();
    const data = { id, ...formData, image };
    setChallenges((prevChallenges) => ([
      ...prevChallenges,
      data,
    ]));
    navigate("/home#challenges");
  };
  return (
    <section className="form_section">
      <div className="section_header">
        <div className="container">
          <h1 className="heading">Challenge Details</h1>
        </div>
      </div>
      <form className="section_form" onSubmit={onSubmitHandler}>
        <div className="container">
          <div className="form_inputs">
            <div className="form_input">
              <label className="label" htmlFor="name">
                Challenge Name
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={onChangeHandler}
                  required
                />
              </label>
            </div>
            <div className="form_input">
              <label className="label" htmlFor="name">
                Start Date
                <input
                  type="datetime-local"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={onChangeHandler}
                  min={new Date().toISOString().slice(0, -8)}
                  required
                />
              </label>
            </div>
            <div className="form_input">
              <label className="label" htmlFor="name">
                End Date
                <input
                  type="datetime-local"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={onChangeHandler}
                  required
                />
              </label>
            </div>
          </div>
          <div className="form_textarea">
            <label className="label" htmlFor="description">
              Description
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={onChangeHandler}
                required
              />
            </label>
          </div>
          <div className="form_upload">
            <p className="label">Image</p>
            <label className={isUploaded ? "label_preview" : "label_noPreview"} htmlFor="upload">
              <img className={isUploaded ? "img_preview" : "img_noPreview"} src={image} alt="selected-file" />
              <span className={isUploaded ? "preview" : "noPreview"}>{isUploaded ? "Change image" : "Upload"}</span>
              <input
                type="file"
                id="upload"
                name="upload"
                accept="image/*"
                onChange={onUploadHandler}
                required
              />
            </label>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#44924C" className="bi bi-image-fill" viewBox="0 0 16 16">
              <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#44924C" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg> */}
          </div>
          <div className="form_select">
            <label className="label" htmlFor="level">
              Level Type
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={onChangeHandler}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
          </div>
          <button className="form_action" type="submit">
            Create Challenge
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
