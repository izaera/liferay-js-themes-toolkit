/**
 * © 2017 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: MIT
 */

const chalk = require('chalk');

const {version} = require('../../package.json');

function getVersionSupportMessage(generatorNamespace) {
	const supportedVersion = chalk.red('Liferay DXP and Portal CE v7.3');

	return (
		`This version of the liferay-js-themes-toolkit (${version})\n` +
		`can create a ${generatorNamespace} for ${supportedVersion}\n` +
		`\n` +
		`For older versions, please use v9 of the toolkit:\n` +
		`\n` +
		`    npm i -g generator-liferay-theme@^9.0.0\n` +
		`    yo ${generatorNamespace}\n`
	);
}

module.exports = {
	getVersionSupportMessage,
};
