import React, { useState } from 'react';

export default function Calculator() {
  const [dob, setDob] = useState(''); // Date of birth input
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split("T")[0]); // Current date input
  const [age, setAge] = useState(null); // Age state

  // Function to calculate age
  const calculateAge = (e) => {
    e.preventDefault(); // Prevents page refresh
    if (dob && currentDate) {
      // Validating that both fields have values
      const birthDate = new Date(dob);
      const currentDateObj = new Date(currentDate);
      
      let ageYears = currentDateObj.getFullYear() - birthDate.getFullYear();
      let ageMonths = currentDateObj.getMonth() - birthDate.getMonth();
      let ageDays = currentDateObj.getDate() - birthDate.getDate();

      // Adjust for negative values
      if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDateObj.getFullYear(), currentDateObj.getMonth(), 0).getDate();
      }
      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }

      // Updating the age state with the calculated values
      setAge({ years: ageYears, months: ageMonths, days: ageDays });
    } else {
      alert("Please fill in both fields"); // Alerts the user if either field is empty
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={calculateAge}>
          <h1>Calculate Your Age Here...</h1>
          <h1>
            Age: {age ? `${age.years} Years, ${age.months} Months, ${age.days} Days` : "Enter your details"}
          </h1>
          
          <label htmlFor="dob"></label>
          <input
            type="date" // Changed to date input for better UX
            value={dob}
            onChange={(e) => setDob(e.target.value)} // Updates dob state
          /><br /><br />

          <label htmlFor="currentDate"></label>
          <input
            type="date" // Changed to date input for better UX
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)} // Updates currentDate state
          /><br /><br />
          
          <button type="submit" className="btn btn-primary">Calculate</button> {/* Calls calculateAge when clicked */}
        </form>
      </center>
    </div>
  );
}
