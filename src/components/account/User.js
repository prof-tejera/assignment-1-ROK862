import React from "react";
import AnchorButton from "../buttons/AnchorButton";
import Helper from "../../utils/helpers";


class User extends React.Component {
  constructor(props) {
    super(props);

    const getUserData = () => {
      // Retrieve gountdown data from database or return new entry.

      if (props.recId) {
        // Get data from database using the record id.
        // ref,cols,callback
        Helper.db.push({
          refId:"workoutDataUser/DEFAULT",
          cols:{ id: 0,
            date: Helper.sys.getDate(),
            account: '',
            currentTime: 0.0,
            entry: 'new',
            score: -1,
            history: {}
          }
        });
      }

      return {
        table: 'workoutDataCountdown',
        id: 0,
        date: Helper.sys.getDate(),
        account: '',
        currentTime: 0.0,
        entry: 'new',
        score: -1
      }
    }

    this.state = getUserData();


  }

  render() {
    return <div className={(this.props.theme) ? this.props.theme : 'Default-Pink-Theme'}>
      <AnchorButton name='Start Now' />
    </div>;
  }
}

export default Countdown;
