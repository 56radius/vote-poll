import React from 'react';
import HeaderBar from "../Elements/HeaderBar";
import Sidebar from '.././Elements/Sidebar'; // Adjust the import path as needed

const SettingsScreen = () => {
    // Inline styles
    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
            backgroundColor: '#f0f0f0',
        },
        content: {
            marginLeft: '250px', // Adjust for sidebar width
            padding: '20px',
            width: '100%',
        },
        header: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        section: {
            backgroundColor: '#fff',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        sectionHeader: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        input: {
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
        },
        button: {
            backgroundColor: '#0d47a1',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
             <HeaderBar /> 
            <Sidebar />
            <div style={styles.content}>
                <div style={styles.header}>Settings</div>
                
                <div style={styles.section}>
                    <div style={styles.sectionHeader}>Account Settings</div>
                    <label>
                        Username:
                        <input type="text" style={styles.input} placeholder="Enter your username" />
                    </label>
                    <label>
                        Email:
                        <input type="email" style={styles.input} placeholder="Enter your email" />
                    </label>
                    <button style={styles.button}>Save Changes</button>
                </div>

                <div style={styles.section}>
                    <div style={styles.sectionHeader}>Password Settings</div>
                    <label>
                        Current Password:
                        <input type="password" style={styles.input} placeholder="Enter current password" />
                    </label>
                    <label>
                        New Password:
                        <input type="password" style={styles.input} placeholder="Enter new password" />
                    </label>
                    <label>
                        Confirm New Password:
                        <input type="password" style={styles.input} placeholder="Confirm new password" />
                    </label>
                    <button style={styles.button}>Change Password</button>
                </div>
            </div>
        </div>
    );
};

export default SettingsScreen;
