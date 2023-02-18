import React, { useState } from 'react'
import './Faq.css'
import { FaCaretDown } from "react-icons/fa";

const Faq = ({ question, answer }) => {
    const [isFaqOpen, setIsFaqOpen] = useState(false)

    const onClick = () => {
        setIsFaqOpen(!isFaqOpen)
    }

    return (
        <div className={`faq__item text-white px-3 px-md-5 py-2 my-2`} onClick={onClick}>
            <div className="faq__question d-flex justify-content-between align-items-center gap-2">
                <h4 className='text-capitalize my-3'>{question}</h4>
                <FaCaretDown className={`icon ${isFaqOpen ? 'open' : 'close'}`} />
            </div>
            <div className={`faq__answer ${isFaqOpen ? 'show' : ''}`}>
                <p className='text-white'>{answer}</p>
            </div>
        </div>
    )
}

export default Faq