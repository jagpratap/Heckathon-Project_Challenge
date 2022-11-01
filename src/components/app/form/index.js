/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUserContext } from "../../../context/userContext";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;
  const titleInputRef = useRef();
  const startDateInputRef = useRef();
  const endDateInputRef = useRef();
  const descriptionInputRef = useRef();
  const imageInputRef = useRef();
  const selectInputRef = useRef();
  const { challenges, setChallenges } = useUserContext();
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    level: "",
  });
  const [errors, setErrors] = useState({
    title: false,
    startDate: false,
    endDate: false,
    validEndDate: false,
    description: false,
    image: false,
    level: false,
  });
  const [image, setImage] = useState("");
  const [isUploaded, setUploaded] = useState(false);
  useEffect(() => {
    if (!id || !challenges.length) return;
    const challengeTemp = challenges.filter((item) => item.id === id);
    setFormData(...challengeTemp);
    setImage(challengeTemp[0].image);
    setUploaded(true);
  }, [challenges]);
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
  const validationSchema = () => {
    if (formData.title === "") {
      setErrors((prev) => (
        {
          ...prev,
          title: true,
        }
      ));
      titleInputRef.current.focus();
      titleInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      return false;
    }
    if (formData.startDate === "") {
      setErrors((prev) => (
        {
          ...prev,
          startDate: true,
        }
      ));
      startDateInputRef.current.focus();
      startDateInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      return false;
    }
    if (formData.endDate === "") {
      setErrors((prev) => (
        {
          ...prev,
          endDate: true,
        }
      ));
      endDateInputRef.current.focus();
      endDateInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      return false;
    }
    if (formData.endDate < formData.startDate) {
      setErrors((prev) => (
        {
          ...prev,
          validEndDate: true,
        }
      ));
      endDateInputRef.current.focus();
      endDateInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      return false;
    }
    if (formData.description === "") {
      setErrors((prev) => (
        {
          ...prev,
          description: true,
        }
      ));
      descriptionInputRef.current.focus();
      descriptionInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      return false;
    }
    if (imageInputRef.current.files.length === 0) {
      setErrors((prev) => (
        {
          ...prev,
          image: true,
        }
      ));
      imageInputRef.current.focus();
      return false;
    }
    if (formData.level === "") {
      setErrors((prev) => (
        {
          ...prev,
          level: true,
        }
      ));
      selectInputRef.current.focus();
      selectInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      return false;
    }
    return true;
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const validate = validationSchema();
    if (!validate) return;
    let challengesTemp;
    let localData = JSON.parse(localStorage.getItem("challengeList"));
    if (!localData) localData = [];
    if (!id) {
      const newChallenge = { id: uuid(), ...formData, image };
      challengesTemp = [...challenges, newChallenge];
      localStorage.setItem("challengeList", JSON.stringify([...localData, newChallenge]));
    } else {
      const editedChallenges = challenges.map((item) => {
        if (item.id === id) {
          return { ...formData, image };
        }
        return item;
      });
      challengesTemp = [...editedChallenges];
      localStorage.setItem("challengeList", JSON.stringify([...challengesTemp]));
    }
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
                  ref={titleInputRef}
                />
                {errors.title && <small>Challenge name is required !</small>}
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
                  ref={startDateInputRef}
                />
                {errors.startDate && <small>Start date is required !</small>}
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
                  ref={endDateInputRef}
                />
                {errors.endDate && <small>End date is required !</small>}
                {errors.validEndDate && <small>End date should be greater than start date !</small>}
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
                ref={descriptionInputRef}
              />
              {errors.description && <small>Description is required !</small>}
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
                ref={imageInputRef}
              />
            </label>
            {errors.image && <small>Image is required !</small>}
          </div>
          <div className="form_select">
            <label className="label" htmlFor="level">
              Level Type
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={onChangeHandler}
                ref={selectInputRef}
              >
                <option value="" disabled hidden>Select Level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            {errors.level && <small>Level is required !</small>}
          </div>
          <button className="form_action" type="submit">
            {!id ? "Create Challenge" : "Save Changes"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
