import React from 'react'
import '../assets/components/CardWithImageSmall.css'
function Home({
    children,
    image,
    title,
    subTitle
}) {
    return (
        <div className="small-card-container center-text">
        <div>
            <img src={image} alt="small card"/>
        </div>
            <div className="small-card-content">
                <p className="small-title small-card-title">
                    {title}
                </p>
                <p className="gray-text">
                    {subTitle}
                </p>
            </div>
        </div>
    )
}

export default Home
