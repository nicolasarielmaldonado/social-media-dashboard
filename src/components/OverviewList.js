import React from 'react'
import { OverviewCard } from './OverviewCard'

export const OverviewList = () => {
    return (
        <>
            <div className="py-4 mb-4">
                <h2 className="text-white text-2xl">Overview - Today <span className="text-desaturatedBlue text-sm">nathanF</span></h2>
            </div>
            
            <OverviewCard type={"Page Views"} sitio={"facebook"} data={60} change={4}/>
            <OverviewCard type={"Likes"} sitio={"facebook"} data={53} change={4}/>
            <OverviewCard type={"Retweets"} sitio={"twitter"} data={10} change={-3}/>
            <OverviewCard type={"Likes"} sitio={"twitter"} data={22} change={4}/>
            <OverviewCard type={"Profile Views"} sitio={"instagram"} data={67} change={2}/>
            <OverviewCard type={"Likes"} sitio={"instagram"} data={11} change={-6}/>
        </>
    )
}
