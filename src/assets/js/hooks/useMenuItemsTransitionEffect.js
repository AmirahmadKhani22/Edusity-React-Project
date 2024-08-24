import {useState , useEffect} from 'react'

function selectMainParts() {
    return {
        program: document.getElementById("program"),
        aboutUs: document.getElementById("about-us"),
        campus: document.getElementById("campus"),
        testimonials: document.getElementById("testimonials"),
        contactUs: document.getElementById("contact-us"),
    }
}

function useTransitionEffect() {
    const [windowPosition , setWindowPosition] = useState(0)
    useEffect(() => {
        const {program , aboutUs , campus , testimonials , contactUs} = selectMainParts()
        setWindowPosition({
            program: program.offsetTop - 80,
            aboutUs: aboutUs.offsetTop - 80,
            campus: campus.offsetTop - 80,
            testimonials: testimonials.offsetTop - 80,
            contactUs: contactUs.offsetTop - 80,
        })
    } , [])
    return windowPosition
}

export default useTransitionEffect
