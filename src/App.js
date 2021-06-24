import { useEffect, useState } from "react";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { OverviewList } from "./components/OverviewList";


function App() {

	const [facebookFollowers, setFacebookFollowers] = useState(2400);
	const [twitterFollowers, setTwitterFollowers] = useState(1040);
	const [instagramFollowers, setInstagramFollowers] = useState(424);
	const [totalFollowers, setTotalFollowers] = useState(0);

	useEffect(() => {
		setTotalFollowers(facebookFollowers + twitterFollowers + instagramFollowers)
	}, [facebookFollowers, twitterFollowers, instagramFollowers])



	return (
		<>

		<div className="mx-auto px-6 pt-6 bg-bgDarkBlue pb-8">

			<Header totalFollowers={totalFollowers}/>

			<CardList facebookFollowers={facebookFollowers} twitterFollowers={twitterFollowers} instagramFollowers={instagramFollowers}/>

			<OverviewList/>

		</div>
		</>
	)
}

export default App;
