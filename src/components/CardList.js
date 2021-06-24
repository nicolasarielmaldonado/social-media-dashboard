import React from 'react'
import { Card } from './Card'

export const CardList = ({facebookFollowers, twitterFollowers, instagramFollowers}) => {
    return (
        <>
            <Card sitio={"facebook"} nombreUsuario={"nathanF"} followers={ facebookFollowers } dailyChange={-200}/>
                
            <Card sitio={"twitter"} nombreUsuario={"nathanF"} followers={ twitterFollowers } dailyChange={2}/>

            <Card sitio={"instagram"} nombreUsuario={"nathanF"} followers={ instagramFollowers } dailyChange={-300}/>
        </>
    )
}
