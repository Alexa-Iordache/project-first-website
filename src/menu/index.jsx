import React from 'react';
import './menu.css';

//meniul din stanga 

class MenuPage extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>My tasks</li>
                    <li>Graph</li>
                    <li>Help</li>
                </ul>
            </div>
        );
    }
}
export default MenuPage;