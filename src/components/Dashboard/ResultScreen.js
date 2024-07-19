import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Elements/Sidebar"; // Import the Sidebar component
import HeaderBar from "../Elements/HeaderBar"; // Import the HeaderBar component

const ResultScreen = () => {
    const { pollId } = useParams(); // Get the poll ID from URL params

    // Example data for poll results (you can fetch this data from an API or state)
    const pollResults = {
        id: pollId,
        sections: [
            {
                title: "Vote for Best Sport Man",
                options: [
                    { id: 1, text: "Football Player", image: "https://example.com/football-player.jpg", votes: 50 },
                    { id: 2, text: "Basketball Player", image: "https://example.com/basketball-player.jpg", votes: 30 },
                    { id: 3, text: "Tennis Player", image: "https://example.com/tennis-player.jpg", votes: 20 }
                ]
            },
            {
                title: "Vote for Best Sport Woman",
                options: [
                    { id: 4, text: "Tennis Player", image: "https://example.com/tennis-player-woman.jpg", votes: 45 },
                    { id: 5, text: "Football Player", image: "https://example.com/football-player-woman.jpg", votes: 35 },
                    { id: 6, text: "Basketball Player", image: "https://example.com/basketball-player-woman.jpg", votes: 25 }
                ]
            }
        ]
    };

    // Inline styles
    const styles = {
        resultScreen: {
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
        sectionTitle: {
            fontSize: '20px',
            margin: '20px 0',
            color: '#0d47a1' // Dark blue title color
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
            padding: '5px',
            borderRadius: '5px',
            backgroundColor: '#f0f0f0'
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
        optionVotes: {
            fontSize: '14px',
            color: '#0d47a1' // Dark blue text color
        },
    };

    return (
        <div style={styles.resultScreen}>
            <HeaderBar /> {/* Include the HeaderBar component */}
            <Sidebar /> {/* Include the Sidebar component */}
            <main style={styles.mainContent}>
                {pollResults.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} style={styles.card}>
                        <h1 style={styles.sectionTitle}>{section.title}</h1>
                        <div style={styles.optionContainer}>
                            {section.options.map(option => (
                                <div key={option.id} style={styles.option}>
                                    <img
                                        src={option.image}
                                        alt={option.text}
                                        style={styles.optionImage}
                                    />
                                    <span style={styles.optionText}>{option.text}</span>
                                    <span style={styles.optionVotes}>Votes: {option.votes}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default ResultScreen;
