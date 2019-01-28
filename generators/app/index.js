'use strict';
const Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');
var extend = require('deep-extend');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  prompting(){
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the download ' + chalk.red('generator-fe') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Please input project name (generator-fe):',
        default: 'generator-fe'
      },
      {
        type: 'input',
        name: 'projectDesc',
        message: 'Please input project description:'
      },
      {
        type: 'input',
        name: 'projectMain',
        message: 'Main file (app.js):',
        default: 'app.js'
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: 'Author (sudiyi):',
        default: 'sudiyi'
      },
      {
        type: 'list',
        name: 'projectLicense',
        message: 'Please choose license:',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'AGPL-3.0']
      }
    ];

    this.prompt(prompts).then(function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));

  }

  default() {

    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }

  }

  writing() {
    mkdirp('src/components/DelayLoading');
    mkdirp('src/config');
    mkdirp('src/normalize');
    mkdirp('src/pages');
    mkdirp('src/pages/Home');
    mkdirp('src/stores');
    mkdirp('src/styles');
    mkdirp('src/util');
    
    /* this.fs.copy(
      this.templatePath('index.js'),
      'lib/index.js'
    ); */  

    // copy constant index file
    this.fs.copy(
      this.templatePath('./src/components/DelayLoading/index.js'),
      'src/components/DelayLoading/index.js'
    );
    this.fs.copy(
      this.templatePath('./src/config/menu.js'),
      'src/config/menu.js'
    );
    this.fs.copy(
      this.templatePath('./src/normalize/index.js'),
      'src/normalize/index.js'
    );
    this.fs.copy(
      this.templatePath('./src/pages/index.js'),
      'src/pages/index.js'
    );
    this.fs.copy(
      this.templatePath('./src/pages/Home/index.jsx'),
      'src/pages/Home/index.jsx'
    );
    this.fs.copy(
      this.templatePath('./src/pages/Home/index.less'),
      'src/pages/Home/index.less'
    );
    /* store */
    this.fs.copy(
      this.templatePath('./src/stores/common.js'),
      'src/stores/common.js'
    );
    this.fs.copy(
      this.templatePath('./src/stores/index.js'),
      'src/stores/index.js'
    );
    /* util */
    this.fs.copy(
      this.templatePath('./src/util/fetch.js'),
      'src/util/fetch.js'
    );
    this.fs.copy(
      this.templatePath('./src/index.js'),
      'src/index.js'
    );

    this.fs.copy(
      this.templatePath('./.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('./.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('./.npmrc'),
      this.destinationPath('.npmrc')
    );
    this.fs.copy(
      this.templatePath('./favicon.ico'),
      this.destinationPath('favicon.ico')
    );
    this.fs.copy(
      this.templatePath('./index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copy(
      this.templatePath('./package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('./project.config.js'),
      this.destinationPath('project.config.js')
    );
    this.fs.copy(
      this.templatePath('./README.md'),
      this.destinationPath('README.md')
    );
    this.fs.copy(
      this.templatePath('./test.json'),
      this.destinationPath('test.json')
    );
    this.fs.copy(
      this.templatePath('./webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('./webpack.dll.config.js'),
      this.destinationPath('webpack.dll.config.js')
    );
    this.fs.copy(
      this.templatePath('./yarn.lock'),
      this.destinationPath('yarn.lock')
    );
  }

  install() {
    this.installDependencies({bower: false});
  }
};
