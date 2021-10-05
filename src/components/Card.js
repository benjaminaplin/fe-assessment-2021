import React, { useState } from 'react'
import Button from './Button'
import styled from 'styled-components'

const CardWrapper = styled.div`
    position: absolute;
    width: 360px;
    height: 360px;
    left: 50vw;
    top: 50vh;
    transform: translate(-50%, -50%);
    background: #C4C4C4;
    border-radius: 16px;
    padding: 16px;
`

const Header = styled.div`
    position: absolute;
    width: 328px;
    height: 290px;
    left: 16px;
    top: 15.51px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    color: #000000;
`
const Paragraph = styled.div`
    font-size: 16px;
    line-height: 20px;
    position: absolute;
    left: 16px;
    right: 16px;
    top: 80.49px;
`

const Loading = styled.div`
    font-size: 16px;
    line-height: 20px;
    position: absolute;
    left: 16px;
    right: 16px;
    top: 80.49px;

    animation: fadeIn ease-in-out 3s 1;

    @keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:1;
        }
      }
`

/** 
* @param {array} people
* @returns {string} names of people from input
*/
const extractNames = (people) => {
    const personArray = []
    people.map(person => {
       personArray.push(person.name)
    })
    return personArray.join(' ')
}


const Card = () => {
    const [people, setPeople] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [animate, setAnimate] = useState(false)

    
    const fetchAPI = async() => {
        setAnimate(true)
        setIsLoading(true)
        //dont make a call if we already have people in our state
        if (people) {
            setIsLoading(false)
            setPeople(null)
            return
        }
        try {
            //makes an api call to swapi
            const response = await fetch('https://swapi.dev/api/people/')
            const data = await response.json()
            //we only want ten characters from call
            const tenCharacters = data.results.slice(0,10)
            setPeople(tenCharacters)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.error(`Error: ${error}`)
        }
    }

    return (
        <CardWrapper>
                <Header>Headline</Header>
                <Button clickEvent={fetchAPI} animation={animate}/> 

                { isLoading ? <Loading/>: (
                    <Paragraph>    
                        { !people ? (
                            `Ready are you? What know you of ready? For eight hundred years have I trained Jedi. 
                            My own counsel will I keep on who is to be trained. 
                            A Jedi must have the deepest commitment, the most serious mind. 
                            This one a long time have I watched. 
                            All his life has he looked away… to the future, to the horizon. 
                            Never his mind on where he was. 
                            Hmm? What he was doing. Hmph. Adventure. Heh. 
                            Excitement. Heh. A Jedi craves not these things.`
                            ): extractNames(people)}            
                    </Paragraph>
                )}
        </CardWrapper>
    )
}

export default Card