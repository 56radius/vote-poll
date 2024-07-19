import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    // Inline styles
    const styles = {
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
        },
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <aside style={styles.sidebar}>
            <div style={styles.sidebarItems}>
                <div
                    style={{ ...styles.sidebarItem, ...styles.sidebarItemActive }}
                    onClick={() => handleNavigation('/dashboard')}
                >
                    <i className="fas fa-tachometer-alt" style={styles.sidebarIcon}></i>
                    Dashboard
                </div>
                <div
                    style={styles.sidebarItem}
                    onClick={() => handleNavigation('/my-polls')}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarItemHover.backgroundColor}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                >
                    <i className="fas fa-poll" style={styles.sidebarIcon}></i>
                    My Polls
                </div>
                <div
                    style={styles.sidebarItem}
                    onClick={() => handleNavigation('/result')}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarItemHover.backgroundColor}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                >
                    <i className="fas fa-poll" style={styles.sidebarIcon}></i>
                    Results
                </div>
                <div
                    style={styles.sidebarItem}
                    onClick={() => handleNavigation('/help')}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarItemHover.backgroundColor}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                >
                    <i className="fas fa-poll" style={styles.sidebarIcon}></i>
                    Help Center
                </div>
                <div
                    style={styles.sidebarItem}
                    onClick={() => handleNavigation('/settings')}
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
                    onClick={() => handleNavigation('/faq')}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarFooterItemHover.backgroundColor}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                >
                    <i className="fas fa-question-circle" style={styles.sidebarIcon}></i>
                    FAQ
                </div>
                <div
                    style={styles.sidebarFooterItem}
                    onClick={() => handleNavigation('/logout')}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = styles.sidebarFooterItemHover.backgroundColor}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = ''}
                >
                    <i className="fas fa-sign-out-alt" style={styles.sidebarIcon}></i>
                    Log Out
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
