import React, { useState, useEffect } from 'react';





export const ExpertisView = () => {


    const [firstName, setFirstName] = useState(() =>
        window.localStorage.getItem('hooksFirstName') || ''
    );
    const [lastName, setLastName] = useState(() =>
        window.localStorage.getItem('hooksLastName') || ''
    );
    const handleFirstNameChange = (e: any) => setFirstName(e.target.value);
    const handleLastNameChange = (e: any) => setLastName(e.target.value);

    useEffect(() => {
        window.localStorage.setItem('hooksFirstName', firstName);
        window.localStorage.setItem('hooksLastName', lastName);
    });

    return (
        <div>
            <h1>This is the expertisView</h1>
            <span><h2>First Name</h2><input value={firstName} onChange={handleFirstNameChange} /></span><br />
            <span><h2>Last Name</h2>  <input value={lastName} onChange={handleLastNameChange} /></span>
            <h3>
                Hello, <span>{firstName} {lastName}</span>
            </h3>
        </div>
    );
}
