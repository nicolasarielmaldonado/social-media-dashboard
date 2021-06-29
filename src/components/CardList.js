import React from 'react'
import { Card } from './Card'

export const CardList = ({ socialMedia, userName }) => {
    return (
        <div className="py-6 md:flex md:flex-row md:justify-around md:w-11/12 md:m-auto">
        {
            ( socialMedia !== undefined ) ? (
                socialMedia.map((e, i) => {
                    return <Card 
                        key={ socialMedia[i].title }
                        site={ socialMedia[i].title } 
                        userName={ userName } 
                        followers={ socialMedia[i].followers } 
                        dailyChange={ socialMedia[i].daily }
                    />;
                })    
            ) :
            <h2>Loading</h2>
        }
        </div>
    )
}
