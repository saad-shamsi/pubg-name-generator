"use client";
import React, { useState, useEffect } from 'react';

// Assuming you have this utility function
import { generateMultipleUniqueNames } from '../../utils/generateMultipleUniqueNames';

const NameBox = ({ name, handleCopy, copied }) => {
    return (
        <div className="flex items-center justify-between py-1 cursor-pointer bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
             onClick={() => handleCopy(name)}>
            <span>{name}</span>
            <ArrowIcon copied={copied} />
        </div>
    );
};
const Skeleton = () => (
    <div className="bg-gray-300 h-7 my-1 rounded-md animate-pulse"></div>
);

const ArrowIcon = ({ copied }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {copied ? (
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 16L11 8H13V16H11ZM11 17L11 19H13V17H11Z" fill="#4CAF50" />
    ) : (
      <path d="M17 10L12 15L7 10H17Z" fill="currentColor"/>
    )}
  </svg>
);

export default function NameGenerator() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [names, setNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [copiedIndex, setCopiedIndex] = useState(-1);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const generatedNames = generateMultipleUniqueNames(10, firstName, lastName);
            setNames(generatedNames);
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [firstName, lastName]);

    const handleCopyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(-1), 2000);
        });
    };

    return (
        <div className="p-4 max-w-4xl mx-auto ">
            <h1 className="text-6xl font-bold mb-7 pb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">
                Unleash Your Warrior Spirit
            </h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
                Create stylish and unique PUBG names with custom first and last names using our easy-to-use name generator. Perfect for making your mark in the battlefield!
            </p>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="text" id="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John" required />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input type="text" id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe" required />
                </div>
            </div>
            <h2 className="text-2xl font-semibold mb-8 my-10 text-center">Generated Names:</h2>
            <div className="grid grid-cols-2 gap-4">
                {loading ? Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton key={index} />
                )) : names.map((name, index) => (
                    <NameBox key={index} name={name} handleCopy={handleCopyToClipboard} copied={copiedIndex === index} />
                ))}
            </div>
            <div className="text-center mt-10">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                    Want Even More Style?
                </h2>
                <p className="text-xl">
                    Visit our <a href="/tools/pubgnamestyle" className="underline text-blue-500 hover:text-blue-700 transition duration-300">Name Transformer Page</a> to explore advanced styling options!
                </p>
            </div>
        </div>
    );
}