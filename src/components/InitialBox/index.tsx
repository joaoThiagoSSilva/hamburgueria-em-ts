import Logo from "../Logo";
import { StyledInitialBox } from "./style";

const InitialBox = () => {
	const ImgShoppingBagGreen = ("../../assets/shopping-bag-green.png");
	const ImgBallsGroup = ("../../assets/balls_group.png");

	return (
		<StyledInitialBox>
			<Logo />
			<div>
				<div>
					{/* <img src={ImgShoppingBagGreen} alt="Shopping" /> */}
				</div>
				<p>
					A vida é como um sanduíche, é preciso recheá-la com os{" "}
					<span>melhores</span> ingredientes.
				</p>
			</div>
			{/* <img src={ImgBallsGroup} alt="balls group" /> */}
		</StyledInitialBox>
	);
};

export default InitialBox;
