import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <div className="counter-card">
                <h1 className="counter-title">React Counter App</h1>

                <div className="counter-display">
                    <div className="count-value">{count}</div>
                    <div className="count-label">Current Count</div>
                </div>

                <div className="counter-buttons">
                    <button
                        className="counter-btn decrement-btn"
                        onClick={decrement}
                    >
                        <span className="btn-icon">−</span>
                        <span className="btn-text">Decrement</span>
                    </button>

                    <button className="counter-btn reset-btn" onClick={reset}>
                        <span className="btn-icon">↺</span>
                        <span className="btn-text">Reset</span>
                    </button>

                    <button
                        className="counter-btn increment-btn"
                        onClick={increment}
                    >
                        <span className="btn-icon">+</span>
                        <span className="btn-text">Increment</span>
                    </button>
                </div>

                <div className="counter-stats">
                    <div className="stat-item">
                        <span className="stat-label">Value:</span>
                        <span className="stat-value">{count}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Absolute:</span>
                        <span className="stat-value">{Math.abs(count)}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Status:</span>
                        <span
                            className={`stat-value status-${
                                count > 0
                                    ? "positive"
                                    : count < 0
                                    ? "negative"
                                    : "zero"
                            }`}
                        >
                            {count > 0
                                ? "Positive"
                                : count < 0
                                ? "Negative"
                                : "Zero"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Project Description Section */}
            <div className="description-section">
                <h2 className="description-title">About This Project</h2>
                <div className="description-content">
                    <div className="description-card">
                        <h3>📱 React Counter Application</h3>
                        <p>
                            This is a simple yet elegant counter application
                            built with React.js. It demonstrates fundamental
                            React concepts including state management, event
                            handling, and component-based architecture.
                        </p>
                    </div>

                    <div className="description-card">
                        <h3>🎯 Key Features</h3>
                        <ul>
                            <li>
                                <strong>Increment:</strong> Increases the
                                counter value by 1
                            </li>
                            <li>
                                <strong>Decrement:</strong> Decreases the
                                counter value by 1
                            </li>
                            <li>
                                <strong>Reset:</strong> Returns the counter back
                                to 0
                            </li>
                            <li>
                                <strong>Real-time Stats:</strong> Shows current
                                value, absolute value, and status
                            </li>
                            <li>
                                <strong>Responsive Design:</strong> Works
                                perfectly on all device sizes
                            </li>
                        </ul>
                    </div>

                    <div className="description-card">
                        <h3>🛠️ Technologies Used</h3>
                        <div className="tech-stack">
                            <span className="tech-badge">React.js</span>
                            <span className="tech-badge">JavaScript ES6+</span>
                            <span className="tech-badge">CSS3</span>
                            <span className="tech-badge">HTML5</span>
                            <span className="tech-badge">Flexbox</span>
                            <span className="tech-badge">CSS Grid</span>
                        </div>
                    </div>

                    <div className="description-card">
                        <h3>🎨 Design Principles</h3>
                        <p>
                            The application follows modern UI/UX principles with
                            a clean, minimalist design. It features smooth
                            animations, intuitive button interactions, and a
                            color-coded status system for better user
                            experience.
                        </p>
                    </div>

                    <div className="description-card">
                        <h3>📚 Learning Outcomes</h3>
                        <ul>
                            <li>Understanding React hooks (useState)</li>
                            <li>Event handling in React</li>
                            <li>Component state management</li>
                            <li>CSS styling and responsive design</li>
                            <li>Modern JavaScript features</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
