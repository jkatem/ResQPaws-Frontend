import React from 'react';
import DogCard from '../components/Dog/DogCard'
import './DogContainer.css'

const DogContainer = (props) => {


    return (
        <div className="dog-container">
            {props.dogs.map(dogObj => {
                return (
                    <DogCard 
                        key={dogObj.id}
                        dog={dogObj}
                    />

                )
            })}
        </div>
    )
}
export default DogContainer;

// use