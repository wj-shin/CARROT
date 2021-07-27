import Button from '@enact/moonstone/Button';
import Item from '@enact/moonstone/Item';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';

const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
		/**
		 * A function to run on click event
		 * @type {Function}
		 */
		onClick: PropTypes.func,

		/**
		 * A title string appear on header
		 * @type {String}
		 */
		title: PropTypes.string
	},

	  render: ({title, login_succ, user_add,  ...rest}) => (
		<Panel {...rest}>
			<Header title={title}>
			</Header>
			<Item onClick={login_succ}>login</Item>
			<Item onClick={user_add}>add user</Item>
		</Panel>
	)
});

export default MainPanel;
