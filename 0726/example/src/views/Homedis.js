import Button from '@enact/moonstone/Button';
import Item from '@enact/moonstone/Item';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';

const Homedis = kind({
	name: 'Homedis',

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

	  render: ({title, system_setting, air_refresher, air_conditionor, blind, ...rest}) => (
		<Panel {...rest}>
			<Header title={title}>
	  	<Item onClick={system_setting}>System Setting</Item>
			<Item onClick={air_refresher}>air refresher</Item>
			<Item onClick={air_conditionor}>air conditionor</Item>
			<Item onClick={blind}>blind</Item>
	  	</Panel>
	  )
});

export default Homedis;

