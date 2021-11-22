import React from "react";
import Places from "./Places"
import "./FAQ.css"
import { Link } from "react-router-dom";

export default function FAQ () {
    return (
        <div>
            <h1 style={{textAlign: "center", margin: "20px", marginTop: "50px"}}>
                Frequently Asked Questions
            </h1>
            <div style={{textAlign: "center"}}>
                <h3>
                Which vaccines does UMass Amherst currently accept as approved vaccines? 
                </h3>
                <blockquote>
                UMass follows Massachusetts Department of Public Health guidelines on approved vaccines in Massachusetts which allow the current World Health Organization (WHO) approved vaccines: AstraZeneca, Johnson & Johnson, Moderna, Pfizer, Sinopharm, Covishield and Sinovac.  
                </blockquote>
                <br /><br />

                <h3>
                Do I need to quarantine when I arrive at UMass for the fall semester?
                </h3>
                <blockquote>
                Current guidance from the CDC and Massachusetts DPH does not require any quarantine if you are fully vaccinated with any of the WHO-approved vaccines (Moderna, Pfizer, Astra-Zeneca, Covishield, Johnson & Johnson, Sinopharm and Sinvovac). This includes international students arriving from outside the U.S. Rather, you are recommended to monitor your symptoms and get tested three to five days after your arrival in the U.S. If you are unvaccinated or vaccinated with a non-WHO-approved vaccine, you will need to quarantine for seven days upon arrival and get tested within three to five days after arrival. You will be able to arrange a test when you arrive at UMass. For international students living on campus, please email quarantine@umass.edu to arrange your quarantine accommodations.
                </blockquote>
                <br /><br />

                <h3>
                Are study abroad options available for Fall 2021?
                </h3>
                <blockquote>
                The International Programs Office (IPO) will continue to offer a limited range of safe study-abroad, international internship, and exchange opportunities in Fall 2021. If you have not already been placed in a program, you should contact the Education Abroad office as soon as possible.
                </blockquote>
                <br /><br />

                <h3>
                What is the Interim Pandemic Policy?
                </h3>
                <blockquote>
                The Interim Pandemic Policy, developed by students and staff and reviewed by the Student Government Association and the Graduate Student Senate, clearly outlines expectations for the spring semester for students living either on or off campus.
                </blockquote>
            </div>
        </div>
    )
}