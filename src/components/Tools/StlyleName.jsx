"use client"
import React, { useState, useEffect } from 'react';
import { generateVariations, getEffectVariationCount } from './logic';

export default function Tool() {
    const [name, setName] = useState('');
    const [primaryStyle, setPrimaryStyle] = useState('');
    const [secondaryStyle, setSecondaryStyle] = useState('');
    const [styledNames, setStyledNames] = useState([]);

    useEffect(() => {
        if (secondaryStyle) {
            const count = getEffectVariationCount(secondaryStyle);
            const variations = generateVariations(name, primaryStyle, secondaryStyle, count);
            setStyledNames(variations);
        }
    }, [secondaryStyle]);

    const handleNameChange = event => setName(event.target.value);
    const handlePrimaryStyleChange = event => setPrimaryStyle(event.target.value);
    const handleSecondaryStyleChange = event => setSecondaryStyle(event.target.value);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
    };

    const generateName = () => {
        if (name.length > 35) {
            alert('Username must not exceed 35 characters.');
            return;
        }
        const count = getEffectVariationCount(secondaryStyle);
        const variations = generateVariations(name, primaryStyle, secondaryStyle, count);
        setStyledNames(variations);
    };

    return (
        <div className="max-w-4xl mx-auto p-5">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Name Generator</h1>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded" />
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
                <option value="gothic">Gothic</option>
                <option value="glitch">Glitch</option>
                <option value="emoticon">Emoticon</option>
                <option value="heart">Heart</option>
                <option value="pugG">PugG</option>
                <option value="squiggle">Squiggle</option>
                <option value="weird">Weird</option>
                <option value="joiner">Joiner</option>
                <option value="thankyou">Thank You</option>
                <option value="starDynamic">Star Dynamic</option>

            </select>
            <button onClick={generateName} className="w-full mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Generate Name
            </button>
            <ul className="list-none mt-4">
                {styledNames.map((styledName, index) => (
                    <li key={index} className="p-2 bg-gray-100 border border-gray-300 rounded mt-2 flex justify-between items-center">
                        {styledName}
                        <button onClick={() => copyToClipboard(styledName)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                           {copyToClipboard? " Copy":"Copied!"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
