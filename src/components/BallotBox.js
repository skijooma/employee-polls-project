
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

/*
* 1. Radio buttons for selecting? -> One button for submit?.
* 2. 2 text views
* 3. 2 options
* 4. 2 indicators for votes cast.
*
*  */


const BallotBox = () => {

	return (
		<div className="ballotBox">
			<div className="ballot">
				<div className="ballotText">
					<Typography variant="body2" color="text.secondary">
						Would you rather
					</Typography>
					<Typography variant="body2" color="text.secondary" className="voteShare">
						81% (4)
					</Typography>
				</div>
				<Button size="small" >
					Vote
				</Button>
			</div>

			<div className="ballot">
				<div className="ballotText">
					<Typography variant="body2" color="text.secondary">
						Would you rather
					</Typography>
					<Typography variant="body2" color="text.secondary" className="voteShare">
						81% (4)
					</Typography>
				</div>
				<Button size="small" >
					Vote
				</Button>
			</div>
		</div>
	)
}

export default BallotBox;
