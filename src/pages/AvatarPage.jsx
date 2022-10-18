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

	return (
		<>
			<h1>Criar Avatar</h1>
			<div className="sprites">
				Escolha um sprite:
				<select>
					{sprites.map((element) => (
						<option>{element}</option>
					))}
				</select>
			</div>

			<div className="seed">
				Entre com uma seed:
				<input type="text" />
			</div>

            <button>Enviar</button>
		</>
	);
};

export default AvatarPage;
