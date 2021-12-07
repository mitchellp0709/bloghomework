import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({handleSubmit,buttonLabel,initialPost}) => {
  const navigate=useNavigate()
  //set form data state
  const [formData, setFormData]=useState(initialPost)

  const handleChange = (event) => {
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData)
    navigate("/")
  }


  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        value={formData.title}
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        value={formData.body}
        onChange={handleChange}
        name="body"
      />
      <input type="submit" value={buttonLabel}/>
    </form>
  );
};

export default Form;
