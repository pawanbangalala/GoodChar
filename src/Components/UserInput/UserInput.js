import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './Styles';

export default class UserInput extends Component {
	constructor() {
		super();
		this.state = {
			text: '',
		};
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleTextChange = value => {
		this.setState({ text: value }, () => this.props.onChangeText(this.state.text));
	};

	componentDidMount() {}
	render() {
		const { placeHolder, autoCapitalize } = this.props;
		return (
			<View style={Styles.container}>
				<TextInput
					ref={component => (this.ref = component)}
					onChangeText={value => this.handleTextChange(value)}
					style={Styles.input}
					placeholder={placeHolder}
					value={this.state.text}
					numberOfLines={1}
					autoCapitalize={autoCapitalize}
					autoCorrect={false}
					underlineColorAndroid="transparent"
				/>
			</View>
		);
	}
}

UserInput.propTypes = {
	placeHolder: PropTypes.string,
};
