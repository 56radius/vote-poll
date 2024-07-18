import React from "react";
import HeaderBar from "../Elements/HeaderBar"; // Import the HeaderBar component

function DashboardScreen() {
    // Example data for polls
    const polls = [
        { id: 1, title: "Poll 1", description: "Description for Poll 1" },
        { id: 2, title: "Poll 2", description: "Description for Poll 2" },
        { id: 3, title: "Poll 3", description: "Description for Poll 3" }
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
        sidebar: {
            width: '250px',
            backgroundColor: '#0d47a1', // Dark blue sidebar
            color: '#fff',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            height: '100%',
            top: '60px', // Adjusted for header height
            bottom: '0',
        },
        sidebarItems: {
            flex: '1',
        },
        sidebarItem: {
            padding: '10px 15px',
            marginBottom: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            display: 'flex',
            alignItems: 'center',
        },
        sidebarItemActive: {
            backgroundColor: '#b0bec5', // Grey for active item
            color: '#0d47a1', // Dark blue text
        },
        sidebarItemHover: {
            backgroundColor: '#1976d2', // Medium blue for hover
        },
        sidebarIcon: {
            marginRight: '10px',
        },
        sidebarFooter: {
            marginTop: 'auto', // Pushes footer items to the bottom
        },
        sidebarFooterItem: {
            padding: '10px 15px',
            marginBottom: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#0d47a1', // Dark blue background for footer items
            color: '#fff',
        },
        sidebarFooterItemHover: {
            backgroundColor: '#1976d2', // Medium blue for hover
        }
        ,
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
        sidebarFooter: {
            marginTop: 'auto', // Pushes footer items to the bottom
        }
    };

    return (
        <div style={styles.dashboardScreen}>
            <HeaderBar /> {/* Include the HeaderBar component */}
            <aside style={styles.sidebar}>
                <div style={styles.sidebarItems}>
                    <div
                        style={{ ...styles.sidebarItem, ...styles.sidebarItemActive }}
                    >
                        <i className="fas fa-tachometer-alt" style={styles.sidebarIcon}></i>
                        Dashboard
                    </div>
                    <div
                        style={styles.sidebarItem}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarItemHover.backgroundColor}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                    >
                        <i className="fas fa-poll" style={styles.sidebarIcon}></i>
                        My Polls
                    </div>
                    <div
                        style={styles.sidebarItem}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarItemHover.backgroundColor}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                    >
                        <i className="fas fa-cog" style={styles.sidebarIcon}></i>
                        Settings
                    </div>
                </div>
                <div style={styles.sidebarFooter}>
                <div
                        style={styles.sidebarFooterItem}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarFooterItemHover.backgroundColor}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                    >
                        <i className="fas fa-sign-out-alt" style={styles.sidebarIcon}></i>
                        Log Out
                    </div>
                    <div
                        style={styles.sidebarFooterItem}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarFooterItemHover.backgroundColor}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                    >
                        <i className="fas fa-question-circle" style={styles.sidebarIcon}></i>
                        FAQ
                    </div>
                    <div
                        style={styles.sidebarFooterItem}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarFooterItemHover.backgroundColor}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                    >
                        <i className="fas fa-question-circle" style={styles.sidebarIcon}></i>
                        Delete Account
                    </div>
                </div>
            </aside>
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
            >
                +
            </button>
        </div>
    );
}

export default DashboardScreen;
