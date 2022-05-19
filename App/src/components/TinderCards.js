import axios from 'axios';
import React, { useState,useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import '../assets/CSS/TinderCards.css'

function TinderCards() {
    // const [people, setPeople] = useState([
    //     {
    //         name: 'Elon Musk',
    //         imgUrl: 'https://publish.one37pm.net/wp-content/uploads/2020/09/elon-musk-2.jpg?fit=636%2C424'
    //     },
    //     {
    //         name: 'Jeff Bezos',
    //         imgUrl: 'https://www.the-sun.com/wp-content/uploads/sites/6/2020/05/NINTCHDBPICT000574792789.jpg?w=620'
    //     }
    // ])
    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("http://localhost:8001/tinder/cards");
            setPeople(req.data);
        }
        fetchData();
    }, [])
    // console.log("People > ",people);

    const swiped = (direction, nameToDelete) =>{
        console.log("Removing: "+ nameToDelete)
        console.log("Direction: "+ direction)
    }
    const outOfFrame = (name) =>{
        console.log(name + "Left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCard__cardContainer">
                {people?.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard> 
                ))}

            </div>
        </div>
    )
}

export default TinderCards;
