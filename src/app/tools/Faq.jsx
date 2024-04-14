"use client"



import React, { useState } from 'react';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = index => {
        setActiveIndex(activeIndex === index ? null : index);  // Toggle the active index
    };

    const faqs = [
        {
            question: "How can I generate a unique PUBG name?",
            answer: "Use our Random Name Generator tool to create unique and memorable PUBG names based on your preferences. You can also customize existing names with different styles and symbols to make them stand out."
        },
        {
            question: "What are some tips for creating a good PUBG name?",
            answer: "A good PUBG name should be memorable, simple yet unique, and possibly reflect your gaming style or personality. Avoid overcomplicated names to ensure it's easy for other players to remember you."
        },
        {
            question: "Can I change my PUBG name after creating it?",
            answer: "Yes, you can change your PUBG name using a Rename Card, which can be purchased in-game or obtained through certain rewards and missions."
        },
        {
            question: "Is there any restriction on how often I can change my PUBG name?",
            answer: "While you can change your name as often as you have Rename Cards, it's generally advised to keep a name for a while to build identity and recognition in the community."
        },
        {
            question: "How does the Name Transformer tool work?",
            answer: "The Name Transformer tool allows you to apply different styles and modifications to your existing name, transforming it into something new and exciting with various fonts and symbols."
        }
    ];

    const ArrowDown = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10H7Z" fill="white"/>
        </svg>
    );

    const ArrowUp = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14L12 9L17 14H7Z" fill="white"/>
        </svg>
    );

    return (
        <div className='bg-black text-white w-full py-8 px-4 '>
        <h2 className='text-3xl font-bold mb-6 text-center'>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
            <div key={index} className="mb-4 rounded-2xl overflow-hidden shadow-lg border border-gray-600">
                <button
                    onClick={() => handleClick(index)}
                    className='w-full text-left py-2 px-4 font-bold text-lg bg-gray-800 rounded-2xl flex justify-between items-center transition duration-300 ease-in-out'
                >
                    {faq.question}
                    <span className="material-icons">
                        {activeIndex === index ? <ArrowDown/> : <ArrowUp/>}
                    </span>
                </button>
                <div className={`${activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden transition-all duration-700 ease-in-out bg-gray-700 p-4`}>
                    {activeIndex === index ? faq.answer : ''}
                </div>
            </div>
        ))}
    </div>
);
}

export default FAQAccordion;