import React from 'react'

export const Header = ({totalFollowers}) => {
    return (
        <>
            <header className="py-4 border-t-0 border-l-0 border-r-0 border-b-1 border-gray-700 mb-4">
				<h2 className="text-white text-2xl">Social Media Dashboard</h2>
				<h3 className="text-desaturatedBlue text-md font-medium">Total followers { totalFollowers }</h3>
			</header>

			{/* dark mode toogle */}
			<div className="flex items-center justify-between w-full mb-12">
				<p className="text-desaturatedBlue text-md font-medium">Dark Mode</p>
				<label className="flex items-center cursor-pointer">
					<div className="relative">

						<input type="checkbox" className="sr-only"/>

						<div className="block bg-gradient-to-r from-toggleColorStart to-toggleColorEnd w-14 h-8 rounded-full"></div>

						<div className="dot absolute left-1 top-1 bg-bgDarkBlue w-6 h-6 rounded-full transition"></div>
					</div>
				</label>
			</div>
        </>
    )
}
