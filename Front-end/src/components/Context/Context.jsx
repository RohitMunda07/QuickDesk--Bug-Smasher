// ThemeContext.jsx
import { useState, createContext, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(false); // false = light, true = dark

    const toggleTheme = () => {
        setTheme((prev) => !prev);
        console.log(theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook (optional, for cleaner use)
export function useTheme() {
    return useContext(ThemeContext);
}
