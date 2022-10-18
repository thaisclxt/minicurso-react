import { useState } from "react";
import { avatarAPI } from "../service/api";

const AvatarPage = () => {
	const sprites = [
		"male",
		"female",
		"human",
		"identicon",
		"initials",
		"bottts",
		"avataaars",
		"jdenticon",
		"gridy",
		"micah",
	];

	const [sprite, setSprite] = useState(sprites[0]);
	const [seed, setSeed] = useState();
	const [avatar, setAvatar] = useState();

	return (
		<>
			<h1>Criar Avatar</h1>
			<div className="sprites">
				Escolha um sprite:
				<select
					value={sprite}
					onInput={(e) => setSprite(e.currentTarget.value)}
				>
					{sprites.map((element) => (
						<option key={element}>{element}</option>
					))}
				</select>
			</div>

			<div
				className="seed"
				value={seed}
				onInput={(e) => setSeed(e.currentTarget.value)}
			>
				Entre com uma seed:
				<input type="text" />
			</div>

			<button onClick={() => setAvatar(`${avatarAPI}${sprite}/${seed}.svg`)}>
				Enviar
			</button>

			<div className="avatar-image">
				<figure>
					<img src={avatar} alt="Avatar gerado" />
				</figure>
			</div>
		</>
	);
};

export default AvatarPage;
