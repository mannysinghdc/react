import { useEffect } from "react";
import { data } from "./data";

const Accordion = () => {

    useEffect(() => {
        document.title = "Accordion"
    }, [])
    
    return (
        <>
            <div className="container col-md-6 my-4">
                <h2 className="text-center my-3">Accordion</h2>
                <div className="accordion" id="accordionExample">
                    {data.map((item, i) => (
                        <div key={i} className="accordion-item">
                            <h2 className="accordion-header" id={`heading${i}`}>
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${i}`}
                                    aria-controls={`collapse${i}`}
                                >
                                    {item.q}
                                </button>
                            </h2>
                            <div
                                id={`collapse${i}`}
                                className={`accordion-collapse collapse ${i<0 ? "show" : ""}`}
                                aria-labelledby={`heading${i}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <strong>{item.ans}</strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Accordion;
