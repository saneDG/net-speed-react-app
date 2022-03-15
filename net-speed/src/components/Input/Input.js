import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value}, () => {
            this.props.valueChange(this.state.value);
        });
    }

    render () {
        return (
            <div class="relative flex space-x-4">
                <div class="flex absolute inset-y-0 left-0 items-center ml-4 p-4 pointer-events-none bg-slate-300 rounded-l-lg font-bold">
                    {this.props.label}
                </div>
                <input
                    name="number"
                    value={this.state.value}
                    onChange={this.handleChange}
                    type="number"
                    class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-24 p-2.5 pl-12" />
            </div>
        );
    }
}

export default Input;