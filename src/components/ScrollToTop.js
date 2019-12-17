import { useEffect } from "react";
import { useLocation } from "react-router-dom";



export default function ScrollToTop() {
    const elements = document.querySelectorAll(".header, .header-burger, .header-nav");
    console.log(elements);
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        elements.forEach(el => { el.classList.remove("open")
        })
    }, [pathname]);

    return null;
}