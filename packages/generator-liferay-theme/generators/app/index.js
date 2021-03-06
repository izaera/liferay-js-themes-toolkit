/**
 * SPDX-FileCopyrightText: © 2017 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: MIT
 */

const Generator = require('yeoman-generator');

const {sayHello} = require('../../lib/util');

/**
 * Generator to create a theme project extending styled, kickstarted from
 * classic.
 */
module.exports = class extends Generator {
	initializing() {
		sayHello(this);

		this.composeWith(require.resolve('../facet-theme'));
		this.composeWith(require.resolve('./app'));
	}
};
