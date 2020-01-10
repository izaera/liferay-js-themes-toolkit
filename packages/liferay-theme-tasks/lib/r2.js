/**
 * © 2017 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: MIT
 */

'use strict';

const gutil = require('gulp-util');
const liferayR2 = require('liferay-r2');
const path = require('path');
const {StringDecoder} = require('string_decoder');
const through = require('through2');

const decoder = new StringDecoder('utf8');
const PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-R2-css';

function gulpR2() {
	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}

		if (file.isBuffer()) {
			try {
				file.contents = swapBuffer(
					file.contents,
					path.relative('.', file.path)
				);
			} catch (err) {
				this.push(file);

				this.emit('error', err);
			}

			cb(null, file);
		}

		if (file.isStream()) {
			this.emit(
				'error',
				new PluginError(PLUGIN_NAME, 'Streaming not supported')
			);

			return cb();
		}
	});
}

function swapBuffer(buffer, filename) {
	var swapped = liferayR2.swap(decoder.write(buffer), {filename});

	return new Buffer(swapped);
}

module.exports = gulpR2;
