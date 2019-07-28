import React, { Component } from "react";
import LeftControls from "./Leftcontrols";
import UserFeedback from "./Userfeedback";
import MainControl from "./Maincontrol";

class Bottombar extends Component {
	bottombarStyle = {
		backgroundColor: "Green",
		position: "absolute",
		height: "10%",
		width: "80%",
		bottom: "0%",
		right: "0%"
	};

	render() {
		return (
			<div style={this.bottombarStyle}>
				<LeftControls />
				<UserFeedback />
				<MainControl />
			</div>
		);
	}
}

export default Bottombar;