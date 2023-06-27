import React from "react";
import Child from "./Child/Child";

class Dates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1Value: "",
            input2Value: "",
            showInputs: false,
        };
    }

    handleInputChange = (inputName, event) => {
        this.setState({
            [inputName]: event.target.value,
        });
    };

    toggleShowInputs = () => {
        this.setState((prevState) => ({
            showInputs: !prevState.showInputs,
        }));
    };

    render() {
        const { input1Value, input2Value, showInputs } = this.state;

        return (
            <div>
                <input
                    type="text"
                    value={input1Value}
                    onChange={(event) => this.handleInputChange("input1Value", event)}
                />
                <input
                    type="text"
                    value={input2Value}
                    onChange={(event) => this.handleInputChange("input2Value", event)}
                />
                <button onClick={this.toggleShowInputs}>Toggle Inputs</button>
                {showInputs && (
                    <Child value={`${input1Value} ${input2Value}`} />
                )}
            </div>
        );
    }
}

export default Dates;