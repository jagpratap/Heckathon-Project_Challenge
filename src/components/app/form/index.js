/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUserContext } from "../../../context/userContext";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;
  const { challenges, setChallenges } = useUserContext();
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    level: "easy",
  });
  const [image, setImage] = useState("");
  const [isUploaded, setUploaded] = useState(false);
  useEffect(() => {
    if (!id) return;
    const challengeTemp = challenges.filter((item) => item.id === id);
    setFormData(...challengeTemp);
    setImage(challengeTemp[0].image);
    setUploaded(true);
  }, []);
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
    let challengesTemp;
    if (id) {
      const editedChallenges = challenges.map((item) => {
        if (item.id === id) {
          return { ...formData, image };
        }
        return item;
      });
      challengesTemp = [...editedChallenges];
    } else {
      const challenge = { id: uuid(), ...formData, image };
      challengesTemp = [...challenges, challenge];
    }
    let localData = JSON.parse(localStorage.getItem("challengeList"));
    if (!localData) localData = [];
    localStorage.setItem("challengeList", JSON.stringify(...localData, challengesTemp));
    setChallenges(challengesTemp);
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
