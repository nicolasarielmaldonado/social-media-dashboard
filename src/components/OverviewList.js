import React from 'react'
import { OverviewCard } from './OverviewCard'

export const OverviewList = ({ userName, socialMedia }) => {

    return (
        <>
            <div className="py-4 mb-4">
                <h2 className="text-white dark:text-black text-2xl">Overview - Today <span className="text-desaturatedBlue text-sm">@{ userName }</span></h2>
            </div>

            <div className="py-8 md:flex md:flex-row md:w-11/12 md:m-auto md:justify-around">
                {
                    ( socialMedia !== undefined ) ? (
                        socialMedia.map((e, i) => {
                            const typeOfData = ["Page Views" , "Retweets", "Profile Views"];
                            const type = socialMedia[i].pageViews || socialMedia[i].retweets || socialMedia[i].profileViews;
                            const typeDaily = socialMedia[i].pageViewsChange || socialMedia[i].retweetsChange || socialMedia[i].profileViewsChange;
                            return(
                                <div className="md:w-1/4" key={ socialMedia[i].title }>  
                                    <OverviewCard 
                                        site={ socialMedia[i].title } 
                                        data={ type } 
                                        change={ typeDaily || "0" }
                                        type={ typeOfData[i] }
                                    />

                                    <OverviewCard 
                                        site={ socialMedia[i].title } 
                                        data={ socialMedia[i].likes } 
                                        change={ socialMedia[i].likesChange || "0" }
                                        type={"Likes"}
                                    />
                                </div>
                            )
                        })    
                    ) :
                    <h2>Loading</h2>
                }
            </div>
        </>
    )
}
