import { useState, useEffect } from "react";
import { animeAPI } from "../service/api";

const QuotePage = () => {
	const [quote, setQuote] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				const data = await (await animeAPI.get("random")).data;
				setQuote(data);
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, []);

	return (
		<div className="quote-page">
			<div className="anime">
				<p>Anime: {quote.anime}</p>
			</div>
			<div className="character">
				<p>Personagem: {quote.character}</p>
			</div>
			<div className="quote">
				<p>Citação: {quote.quote}</p>
			</div>
		</div>
	);
};

export default QuotePage;
