import React, { useState, useEffect } from 'react'
import { Layout } from '../../components/Layout/Layout'
import { api } from '../../utils/api'
import { Card } from '../../components/Card/Card'
import Loader from "react-loader-spinner";

const Characters = () => {

    const endpoint = '/character/';
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get(endpoint)
            .then(response => {
                // console.log(response)
                const { data } = response
                setCharacters(data.results)               
            })
            setTimeout(() => {
                setLoading(false)
            }, 2000)
    }, [endpoint])

    return(
        <Layout>
            {
                loading
                ?
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
                :
                characters.map(character => <Card key={character.id} character={character} />)
            }
        </Layout>
    )
}

export { Characters }