"use client";
import React, { useState, useEffect } from 'react';

// Assuming you have this utility function
import { generateMultipleUniqueNames } from '../../utils/generateMultipleUniqueNames';

const SkeletonItem = () => (
    <div className="bg-gray-300 h-7 my-1 rounded-md animate-pulse"></div>
);

export default function NameGenerator() {
    const [prefix, setPrefix] = useState('');
    const [suffix, setSuffix] = useState('');
    const [names, setNames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const generatedNames = generateMultipleUniqueNames(10, prefix, suffix);
            setNames(generatedNames);
            setLoading(false);
        }, 300); // Adding a fake delay to simulate API call
        return () => clearTimeout(timer);
    }, [prefix, suffix]);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Name Generator Tool</h1>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Prefix:
                    <input type="text" value={prefix} onChange={(e) => setPrefix(e.target.value)}
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter prefix" />
                </label>
                <label className="block text-sm font-medium text-gray-900">
                    Suffix:
                    <input type="text" value={suffix} onChange={(e) => setSuffix(e.target.value)}
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter suffix" />
                </label>
            </div>
            <h2 className="text-lg font-semibold mb-2">Generated Names:</h2>
            <ul className="list-disc pl-5">
                {loading ? Array.from({ length: 10 }).map((_, index) => <SkeletonItem key={index} />) :
                names.map((name, index) => <li key={index} className="py-1">{name}</li>)}
            </ul>
        </div>
    );
}