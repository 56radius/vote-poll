import React from "react";

function HeaderBar() {
    // Inline styles
    const styles = {
        headerBar: {
            background: 'linear-gradient(to right, #0d47a1, #607d8b)', // Blue to grey gradient
            color: '#fff',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow
            position: 'fixed',
            width: '100%',
            top: '0',
            left: '0',
            zIndex: '1000'
        },
        headerTitle: {
            fontSize: '20px',
            margin: '0'
        },
        userProfile: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
        },
        userName: {
            marginRight: '10px',
        },
        profilePic: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #fff',
        }
    };

    return (
        <header style={styles.headerBar}>
            <h1 style={styles.headerTitle}>Voting Dashboard</h1>
            <div style={styles.userProfile}>
                <span style={styles.userName}>John Doe</span>
                <img 
                    src="https://via.placeholder.com/40" 
                    alt="User Profile"
                    style={styles.profilePic}
                />
            </div>
        </header>
    );
}

export default HeaderBar;
