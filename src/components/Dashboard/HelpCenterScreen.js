import React from "react";
import Sidebar from "../Elements/Sidebar"; // Import the Sidebar component
import HeaderBar from "../Elements/HeaderBar"; // Import the HeaderBar component

const HelpCenterScreen = () => {
    // Example FAQ data
    const faqs = [
        {
            question: "How do I create a new poll?",
            answer: "To create a new poll, navigate to the dashboard and click on the 'Create Poll' button at the bottom right corner of the screen. Fill in the required details and submit."
        },
        {
            question: "How do I vote in a poll?",
            answer: "To vote in a poll, navigate to the polls section from the sidebar. Select the poll you want to vote in, choose your preferred option, and click on the 'Vote' button."
        },
        {
            question: "How can I view the results of a poll?",
            answer: "To view the results of a poll, navigate to the results section from the sidebar. Select the poll you want to view the results for, and the results will be displayed."
        },
        {
            question: "How do I log out?",
            answer: "To log out, click on the 'Log Out' option in the sidebar footer. This will end your current session and redirect you to the login screen."
        }
    ];

    // Inline styles
    const styles = {
        helpCenterScreen: {
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
        question: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#0d47a1', // Dark blue text color
            marginBottom: '10px'
        },
        answer: {
            fontSize: '14px',
            color: '#0d47a1', // Dark blue text color
            marginBottom: '20px'
        },
    };

    return (
        <div style={styles.helpCenterScreen}>
            <HeaderBar /> {/* Include the HeaderBar component */}
            <Sidebar /> {/* Include the Sidebar component */}
            <main style={styles.mainContent}>
                <h1>Help Center</h1>
                {faqs.map((faq, index) => (
                    <div key={index} style={styles.card}>
                        <h2 style={styles.question}>{faq.question}</h2>
                        <p style={styles.answer}>{faq.answer}</p>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default HelpCenterScreen;
