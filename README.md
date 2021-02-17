myplug
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/myplug.svg)](https://npmjs.org/package/myplug)
[![Downloads/week](https://img.shields.io/npm/dw/myplug.svg)](https://npmjs.org/package/myplug)
[![License](https://img.shields.io/npm/l/myplug.svg)](https://github.com/myrddraall/myplug/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @doptools/plugin-version
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@doptools/plugin-version/0.0.0-dev.4 linux-x64 node-v14.15.5
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example version:VersionCommand`](#oclif-example-versionversioncommand)
* [`oclif-example version:bump VERSIONPART`](#oclif-example-versionbump-versionpart)
* [`oclif-example version:get`](#oclif-example-versionget)
* [`oclif-example version:new [FILE]`](#oclif-example-versionnew-file)
* [`oclif-example version:set VERSION`](#oclif-example-versionset-version)

## `oclif-example version:VersionCommand`

```
USAGE
  $ oclif-example version:VersionCommand
```

_See code: [src/commands/version/VersionCommand.ts](https://github.com/doptools/plugin-version/blob/v0.0.0-dev.4/src/commands/version/VersionCommand.ts)_

## `oclif-example version:bump VERSIONPART`

Bump the version of a project

```
USAGE
  $ oclif-example version:bump VERSIONPART

ARGUMENTS
  VERSIONPART  (major|premajor|minor|preminor|patch|prepatch|prerelease) Which part of the semver to bump

OPTIONS
  -d, --dryRun
```

_See code: [src/commands/version/bump.ts](https://github.com/doptools/plugin-version/blob/v0.0.0-dev.4/src/commands/version/bump.ts)_

## `oclif-example version:get`

Get the version of the project

```
USAGE
  $ oclif-example version:get
```

_See code: [src/commands/version/get.ts](https://github.com/doptools/plugin-version/blob/v0.0.0-dev.4/src/commands/version/get.ts)_

## `oclif-example version:new [FILE]`

describe the command here

```
USAGE
  $ oclif-example version:new [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/version/new.ts](https://github.com/doptools/plugin-version/blob/v0.0.0-dev.4/src/commands/version/new.ts)_

## `oclif-example version:set VERSION`

Sets the version of a project

```
USAGE
  $ oclif-example version:set VERSION

ARGUMENTS
  VERSION  The verion to set the project to
```

_See code: [src/commands/version/set.ts](https://github.com/doptools/plugin-version/blob/v0.0.0-dev.4/src/commands/version/set.ts)_
<!-- commandsstop -->
