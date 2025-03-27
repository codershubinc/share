'use client';
import { useState, useEffect } from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar";
import { Sun, Moon, Home, Settings } from "lucide-react"; // Icons

export function AppSidebar() {
    const [theme, setTheme] = useState(() => {
        return typeof window !== "undefined"
            ? localStorage.getItem("theme") || "light"
            : "light";
    });

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", newTheme);
            document.documentElement.classList.toggle("dark", newTheme === "dark");
        }
    };

    // Apply theme on mount
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <Sidebar
                className="h-[98vh] rounded-3xl my-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md"
                variant="floating"
                collapsible="offcanvas"
            >
                {/* Sidebar Header */}
                <SidebarHeader className="p-4 text-xl font-bold">Menu</SidebarHeader>

                {/* Sidebar Content */}
                <SidebarContent>
                    <SidebarGroup>
                        <button className="flex items-center gap-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                            <Home size={20} />
                            <span>Home</span>
                        </button>
                        <button className="flex items-center gap-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                            <Settings size={20} />
                            <span>Settings</span>
                        </button>
                    </SidebarGroup>
                </SidebarContent>

                {/* Sidebar Footer */}
                <SidebarFooter className="p-4">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-2 w-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                    </button>
                </SidebarFooter>
            </Sidebar>
        </div>
    );
}
