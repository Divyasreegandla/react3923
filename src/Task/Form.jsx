import React, { useReducer } from "react";

export default function Form() {
  const initilState = {
    firstName: "",
    lastName:"",
    email:"",
    contact:"",
    gender:"",
    subject:{english:true,maths:false,physics:false},
    document:null,
    url:"",
    choice:"",
    about:"",
  };
   const styles = {
    body:{
        backgroundColor:"#7892b3",
        margin:0,
        padding:"20px",
        boxSizing:"border-box",
        alignments:"center",
        justifyContent:"center",
    },
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#d6dae0",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "600px",
      margin: "20px auto",
      boxShadow: "0 4px 8px rgba(10, 9, 9, 0.1)",
    },
    header: { textAlign: "center", color: "#363434" },
    formGroup: { marginBottom: "15px" },
    label: { display: "block", fontWeight: "bold", marginBottom: "5px" },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #dad8d8",
      boxSizing: "border-box",
    },
    buttonConta: { display: "flex", justifyContent: "space-between", marginTop: "20px" },
    btnSubmit: { backgroundColor: "#54bb54", color: "white", padding: "10px 25px", border: "none", borderRadius: "5px", cursor: "pointer" },
    btnReset: { backgroundColor: "#e75752", color: "white", padding: "10px 25px", border: "none", borderRadius: "5px", cursor: "pointer" },
  };

    const [state, dispatch] = useReducer(formReducer, initilState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    dispatch({
      type: "UPDATE_CHECKBOX",
      field: e.target.name,
      value: e.target.checked,
    });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", state);
  };

  

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "UPDATE_CHECKBOX":
      return {
        ...state,
        subject: { ...state.subject, [action.field]: action.value },
      };
    case "RESET":
      return initilState;
    default:
      return state;
  }
}

  return (
     <div style={styles.body}>
    <div style={styles.container}>
       
      <h2 style={styles.header}>Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>First Name</label>
          <input style={styles.input} name="firstName" placeholder="Enter First Name" value={state.firstName} onChange={handleChange} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Last Name</label>
          <input style={styles.input} name="lastName" placeholder="Enter Last Name" value={state.lastName} onChange={handleChange} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Enter Email</label>
          <input style={styles.input} type="email" name="email" placeholder="Enter email" value={state.email} onChange={handleChange} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Contact</label>
          <input style={styles.input} name="contact" placeholder="Enter Mobile number" value={state.contact} onChange={handleChange} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Gender</label>
          <input type="radio" name="gender" value="Male" checked={state.gender === "Male"} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" checked={state.gender === "Female"} onChange={handleChange} style={{marginLeft: '10px'}} /> Female
          <input type="radio" name="gender" value="Other" checked={state.gender === "Other"} onChange={handleChange} style={{marginLeft: '10px'}} /> Other
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Your best Subject</label>
          <input type="checkbox" name="English" checked={state.subject.English} onChange={handleCheckbox} /> English
          <input type="checkbox" name="Maths" checked={state.subject.Maths} onChange={handleCheckbox} style={{marginLeft: '10px'}} /> Maths
          <input type="checkbox" name="Physics" checked={state.subject.Physics} onChange={handleCheckbox} style={{marginLeft: '10px'}} /> Physics
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Upload Document</label>
          <input type="file" name="document" onChange={handleChange} />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Enter URL*</label>
          <input style={styles.input} type="url" name="url" placeholder="Enter url" value={state.url} onChange={handleChange} />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Select your choice</label>
          <select style={styles.input} name="choice" value={state.choice} onChange={handleChange}>
            <option value="">Select your Ans</option>
            <option value="Choice1">Choice 1</option>
            <option value="Choice2">Choice 2</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>About</label>
          <textarea style={{...styles.input, height: '80px'}} name="about" placeholder="About your self" value={state.about} onChange={handleChange} />
        </div>

        <div style={styles.buttonConta}>
          <button type="button" style={styles.btnReset} onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          <button type="submit" style={styles.btnSubmit}>Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}