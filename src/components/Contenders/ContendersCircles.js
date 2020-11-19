import { useEffect, useState } from 'react'
import axios from 'axios'

import './ContendersCircles.css'

const ContendersCircles = (props) => {
    const [imageCircle, setImageCircle] = useState([])
    const [hover, setHover] = useState(false)
    const [nbVote, setNbVote] = useState([])
            
    const theme = props.info.params.style

        

    useEffect(()=> {
        const fetchData = async () => {
            const url = `http://9e420d11d0ce.ngrok.io/${theme}/all`
          const request = await axios.get(url)
            console.log(url)
          setImageCircle(request.data)
          setNbVote(request.data.nb_vote)
            console.log('DATA------------>', request.data)
            console.log('NB VOTE---------->', request.nb_vote)
            
        }
        fetchData()
      }, [theme])

      const handleMouseEnter = () => {
          setHover(true)
      }

      const handleMouseOut = () => {
          setHover(false)
      }

        return (
                <div className='contenders__wrapper'>
                    {
                        imageCircle
                        .map((image, i) => (
                            <div key={i}>
                                 {
                                    hover && 
                                        imageCircle
                                        .map((vote, i ) => (
                                            <p className='score_onHover'
                                            key={i} 
                                            >
                                                {nbVote}
                                            </p>
                                        ))
                                }
                                <img
                                    className='contenders__circle'
                                    key={i}
                                    src={image.url}
                                    alt={image.name}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseOut={handleMouseOut}
                                />
                               
                            </div>
                        ))
                    }
                </div>
        )
}    

export default ContendersCircles