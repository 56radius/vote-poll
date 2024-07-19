import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Elements/Sidebar"; // Import the Sidebar component
import HeaderBar from "../Elements/HeaderBar"; // Import the HeaderBar component

const PollScreen = () => {
    const { pollId } = useParams(); // Get the poll ID from URL params

    // Example data for a specific poll (you can fetch this data from an API or state)
    const poll = {
        id: pollId,
        sections: [
            {
                title: "Vote for Best Sport Man",
                options: [
                    { id: 1, text: "Football Player", image: "https://example.com/football-player.jpg" },
                    { id: 2, text: "Basketball Player", image: "https://example.com/basketball-player.jpg" },
                    { id: 3, text: "Tennis Player", image: "https://example.com/tennis-player.jpg" }
                ]
            },
            {
                title: "Vote for Best Sport Woman",
                options: [
                    { id: 4, text: "Tennis Player", image: "https://example.com/tennis-player-woman.jpg" },
                    { id: 5, text: "Football Player", image: "https://example.com/football-player-woman.jpg" },
                    { id: 6, text: "Basketball Player", image: "https://example.com/basketball-player-woman.jpg" }
                ]
            }
        ]
    };

    // State to store selected options
    const [selectedOptions, setSelectedOptions] = useState({});

    // Inline styles
    const styles = {
        pollScreen: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            backgroundColor: '#e3f2fd', // Light blue background
            color: '#0d47a1', // Dark blue text color
        },
        mainContent: {
            marginLeft: '250px',
            padding: '20px',
            width: 'calc(100% - 250px)',
            overflowY: 'auto',
            marginTop: '60px', // Adjusted for header height
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            marginBottom: '20px'
        },
        cardTitle: {
            fontSize: '18px',
            margin: '0 0 10px',
            color: '#0d47a1' // Dark blue title color
        },
        cardDescription: {
            fontSize: '14px',
            margin: '0'
        },
        optionContainer: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px'
        },
        option: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            cursor: 'pointer',
            border: '1px solid transparent',
            padding: '5px',
            borderRadius: '5px'
        },
        optionImage: {
            width: '50px',
            height: '50px',
            borderRadius: '5px',
            marginRight: '15px'
        },
        optionText: {
            fontSize: '14px',
            color: '#0d47a1' // Dark blue text color
        },
        optionButton: {
            padding: '10px 15px',
            fontSize: '14px',
            color: '#fff',
            backgroundColor: '#0d47a1', // Dark blue button
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '10px',
            display: 'block'
        },
        optionButtonHover: {
            backgroundColor: '#1976d2', // Medium blue for hover
        },
        sectionTitle: {
            fontSize: '20px',
            margin: '20px 0',
            color: '#0d47a1' // Dark blue title color
        },
        submitButton: {
            padding: '10px 15px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#0d47a1', // Dark blue button
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '20px'
        },
        submitButtonHover: {
            backgroundColor: '#1976d2', // Medium blue for hover
        },
        selectedOption: {
            border: '1px solid #0d47a1',
        }
    };

    const handleOptionClick = (sectionIndex, optionId) => {
        setSelectedOptions(prevSelectedOptions => ({
            ...prevSelectedOptions,
            [sectionIndex]: optionId
        }));
    };

    const handleSubmit = () => {
        // Handle form submission logic (e.g., submit all votes)
        console.log(`Votes submitted for poll ${pollId}:`, selectedOptions);
    };

    return (
        <div style={styles.pollScreen}>
            <HeaderBar /> {/* Include the HeaderBar component */}
            <Sidebar /> {/* Include the Sidebar component */}
            <main style={styles.mainContent}>
                {poll.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} style={styles.card}>
                        <h1 style={styles.sectionTitle}>{section.title}</h1>
                        <div style={styles.optionContainer}>
                            {section.options.map(option => (
                                <div
                                    key={option.id}
                                    style={{
                                        ...styles.option,
                                        ...(selectedOptions[sectionIndex] === option.id ? styles.selectedOption : {})
                                    }}
                                    onClick={() => handleOptionClick(sectionIndex, option.id)}
                                >
                                    <img
                                        src={option.image}
                                        alt={option.text}
                                        style={styles.optionImage}
                                    />
                                    <span style={styles.optionText}>{option.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button
                    style={styles.submitButton}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = styles.submitButtonHover.backgroundColor}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = styles.submitButton.backgroundColor}
                    onClick={handleSubmit}
                >
                    Submit Votes
                </button>
            </main>
        </div>
    );
};

export default PollScreen;
