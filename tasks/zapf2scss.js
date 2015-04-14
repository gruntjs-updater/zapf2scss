/*
 * grunt-font-sampler
 * https://github.com/pedrocorreia/font-sampler
 *
 * Copyright (c) 2014 Pedro Correia
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require('chalk');
var parser = require('xml2js');

module.exports = function(grunt) {

  grunt.registerMultiTask('zapf2scss', 'The best Grunt plugin ever.', function() {

    var done = this.async();

    var options = this.options({
      zapfTable: '',
      sass: '',
      sassListName: '',
      charNamePrefix: '',
      stripCharNamePrefix: true
    });

    if ( options.zapfTable == '' ) { grunt.log.error( chalk.red('You haven\'t set a path to the zapfTable file.')); return false; }
    if ( options.sass == '' ) { grunt.log.error( chalk.red('You haven\'t set a path to output the SASS file.' )); return false; }
    if ( options.sassListName == '' ) { grunt.log.error( chalk.red('You haven\'t set a path to the zapfTable file.')); return false; }
    if ( !grunt.file.read(options.zapfTable) ) { grunt.log.error( chalk.red('Failed to read the ' + options.zapfTable + 'file.')); }


    var xml_chars = grunt.file.read(options.zapfTable);


    var json_chars, scss, unicode, name;
    var glyphs = [];

    parser.parseString(xml_chars, function (err, result) {
        json_chars = result;
    });

    scss = options.sassListName + ': (\n';

    json_chars.ZapfTable.glyphInfo.forEach(function(glyph, index){

        if ( glyph.unicodeList !== undefined ) {

            unicode = glyph.unicodeList[0].unicode[0].$.value;
            name = glyph.fontGlyph[0].$.glyphName.replace(/\./g,"-");

            if ( options.stripCharNamePrefix === true ) {
              name = name.replace(/options.charNamePrefix/g,'');
            }

            if( unicode.match(/\+E([a-z0-9])/g) !== null )
            {
                scss += "\t('"+name+"','"+unicode.replace("U\+",'\\').toLowerCase()+"'),\n";
                glyphs.push(name);
            }
        }

    });

    scss += ");\n";

    grunt.file.write(options.sass, scss);
    grunt.log.writeln('File ' + chalk.green(options.sass) + ' created with '+ chalk.green(json_chars.ZapfTable.glyphInfo.length) +' icons.');

    done();

  });

};
