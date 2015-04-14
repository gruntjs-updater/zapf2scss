# zapf2scss

> Creates a SASS list with character names and unicode from a Zapf table extracted from a TrueType font with ftxanalyzer.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install zapf2scss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('zapf2scss');
```

## The "zapf2scss" task

### Overview
In your project's Gruntfile, add a section named `zapf2scss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  zapf2scss: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});

```

### Options

#### zapfTable
Type: `String`
Default value: `''`

The path to the ftxanalyzer generated xml Zapf Table file.

#### sass
Type: `String`
Default value: `'src/sass/_glyphs.scss'`

The output SASS file name.

#### sassListName
Type: `String`
Default value: `''`

The variable name used to create the SASS list in the output file.

#### charNamePrefix
Type: `String`
Default value: `''`

Use if your characters have a prefix that you need to strip out of the css class names.

#### stripCharNamePrefix
Type: `Boolean`
Default value: `true`

Set if the charNamePrefix string should be stripped from the character names.

### Usage Examples

```js
grunt.initConfig({
  zapf2scss: {
    my_sample: {
        options: {
          zapfTable: 'src/zapf-table/SymbolFont.xml',
          sass: 'src/sass/_glyphs.scss',
          sassListName: '$sf-icons',
          charNamePrefix: 'ink-',
          stripCharNamePrefix: true
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
