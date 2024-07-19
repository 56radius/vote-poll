import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../Elements/HeaderBar";
import Sidebar from "../Elements/Sidebar"; // Import the Sidebar component

function DashboardScreen() {
    const navigate = useNavigate(); // Hook to programmatically navigate

    // Example data for polls
    const polls = [
        { id: 1, title: "Sport Vote", description: "Vote for your best sport man and sport woman" },
        { id: 2, title: "Election Vote", description: "Who would win the next post it could be you" },
        { id: 3, title: "Best Lecturer", description: "Best lecturer post" }
    ];

    // Inline styles
    const styles = {
        dashboardScreen: {
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
        createPollButton: {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            backgroundColor: '#0d47a1', // Dark blue button
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            fontSize: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        createPollButtonHover: {
            backgroundColor: '#1976d2', // Medium blue for hover
        },
        voteButton: {
            padding: '5px 10px',
            fontSize: '14px',
            color: '#fff',
            backgroundColor: '#0d47a1', // Dark blue button
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        voteButtonHover: {
            backgroundColor: '#1976d2', // Medium blue for hover
        },
    };

    return (
        <div style={styles.dashboardScreen}>
            <HeaderBar /> {/* Include the HeaderBar component */}
            <Sidebar /> {/* Include the Sidebar component */}
            <main style={styles.mainContent}>
                <h1>Voting Dashboard</h1>
                {polls.map(poll => (
                    <div key={poll.id} style={styles.card}>
                        <h2 style={styles.cardTitle}>{poll.title}</h2>
                        <p style={styles.cardDescription}>{poll.description}</p>
                        <button
                            style={styles.voteButton}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = styles.voteButtonHover.backgroundColor}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = styles.voteButton.backgroundColor}
                            onClick={() => navigate(`/poll/${poll.id}`)}
                        >
                            Vote
                        </button>
                    </div>
                ))}
            </main>
            <button
                style={styles.createPollButton}
                onMouseOver={e => e.currentTarget.style.backgroundColor = styles.createPollButtonHover.backgroundColor}
                onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                onClick={() => navigate('/create-poll')}
            >
                +
            </button>
        </div>
    );
}

export default DashboardScreen;
