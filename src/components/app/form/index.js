import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUserContext } from "../../../context/userContext";

const Form = () => {
  const navigate = useNavigate();
  const { setChallenges } = useUserContext();
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
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
    const data = { id: uuid(), ...formData, image };
    setChallenges((prevChallenges) => ([
      ...prevChallenges,
      data,
    ]));
    navigate("/home");
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
              />
            </label>
          </div>
          <div className="form_upload">
            <p className="label">Image</p>
            <label htmlFor="upload">
              <img className={isUploaded ? "show" : "hide"} src={image} alt="selected-file" />
              Upload
              <input
                type="file"
                id="upload"
                name="upload"
                accept="image/*"
                onChange={onUploadHandler}
              />
            </label>
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
