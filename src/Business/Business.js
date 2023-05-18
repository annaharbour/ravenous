import React from "react";
import './Business.css'

class Business extends React.Component {
    render(){
        const {business} = this.props

        return (
            <div className="business">
                <div className="business-image">
                    <img src={business.imageSrc} alt={business.name} />
                </div>
            <div className="business-info">
                <h2 className="business-name">{business.name}</h2>
                <div className = "business-address">
                    <a 
                        className="google-map-link"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(`${business.name} ${business.address} ${business.city} ${business.state} ${business.zipCode}`)}`} target="_blank" rel="noopener noreferrer">
                    <p className="address">{business.address}</p>
                    <p className="address">{`${business.city}, ${business.state} ${business.zipCode}`}</p>
                    </a>
                </div>
               
                <div className="business-rating">
                    <h3>{business.rating} stars </h3>
                    <h3>{business.price}</h3>
                </div>

            </div>
            </div>
        );
    }
       
    }


export default Business