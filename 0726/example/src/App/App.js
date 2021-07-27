import {ActivityPanels} from '@enact/moonstone/Panels';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import PropTypes from 'prop-types';
import React from 'react';

import ButtonPanel from '../views/ButtonPanel';
import MainPanel from '../views/MainPanel';

class App extends React.Component {
	static propTypes = {
		index: PropTypes.number
	}

	static defaultProps = {
		index: 0
	}

	constructor (props) {
		super(props);
		this.state = {
			index: this.props.index
		};
	}

	handleSelectBreadcrumb = ({index}) => this.setState({index})


    login_succ = () => this.setState(prevState => ({index: prevState.index + 1}))
    system_setting = () => this.setState(prevState => ({index: prevState.index + 1}))
    air_refresher = () => this.setState(prevState => ({index: prevState.index + 2}))
	  air_conditionor = () => this.setState(prevState => ({index: prevState.index + 3}))
	  blind = () => this.setState(prevState => ({index: prevState.index + 4}))
    user_add = () => this.setState(prevState => ({index: prevState.index + 6}))
    back_login = () => this.setState(prevState => ({index: prevState.index - 6}))
    
	render () {
		return (
			<ActivityPanels {...this.props} onSelectBreadcrumb={this.handleSelectBreadcrumb} index={this.state.index}>
				    <MainPanel title="Login please" login_succ={this.login_succ} user_add={this.user_add}/>
				    <MainPanel title="Home" system_setting={this.system_setting} air_refresher={this.air_refresher} air_conditionor={this.air_conditionor} bilnd={this.blind}/>
            <MainPanel title="System Setting" />
				<MainPanel title="Four" />
			</ActivityPanels>
		);
	}
}

export default MoonstoneDecorator(App);
