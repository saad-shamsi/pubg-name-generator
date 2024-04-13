"use client"
import React, { useState } from 'react';
import { generateVariations } from './logic';

export default function Tool() {
    const [name, setName] = useState('');
    const [primaryStyle, setPrimaryStyle] = useState('');
    const [secondaryStyle, setSecondaryStyle] = useState('');
    const [styledNames, setStyledNames] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePrimaryStyleChange = (event) => {
        setPrimaryStyle(event.target.value);
    };

    const handleSecondaryStyleChange = (event) => {
        setSecondaryStyle(event.target.value);
    };

    const generateName = () => {
        if (name.length > 35) {
            alert('Username must not exceed 35 characters.');
            return;
        }
        const variations = generateVariations(name, primaryStyle, secondaryStyle, 10);
        setStyledNames(variations);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" />
            <select value={primaryStyle} onChange={handlePrimaryStyleChange}>
                <option value="">Select Primary Style</option>
                <option value="asian">Asian Style</option>
                <option value="asian2">Asian Style 2</option>
                <option value="indian">Indian Way</option>
                <option value="russian">Russian Way</option>
                <option value="big_russian">Big Russian</option>
                <option value="squiggle1">Squiggle Symbols 1</option>
                <option value="squiggle2">Squiggle Symbols 2</option>
                <option value="arabic">Arabic Style</option>
                <option value="urdu">Urdu Style</option>
                <option value="sindhi">Sindhi Style</option>
            </select>
            <select value={secondaryStyle} onChange={handleSecondaryStyleChange}>
                <option value="">Select Secondary Effect</option>
                <option value="sad">Sad</option>
                <option value="happy">Happy</option>
                <option value="decorative">Decorative</option>
            </select>
            <button onClick={generateName}>Generate Name</button>
            <ul>
                {styledNames.map((styledName, index) => (
                    <li key={index}>{styledName}</li>
                ))}
            </ul>
        </div>
    );
}