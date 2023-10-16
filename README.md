# outlook-for-linux

Unofficial Microsoft Outlook client for Linux using Electron. This app wraps the
web version of Outlook as a standalone desktop application.

## Overview

Outlook for Linux was developed to provide a native-like desktop experience by
wrapping the web version in an Electron shell.

While we strive to add useful features and improvements, some limitations are
inherent because the app relies on the Microsoft Outlook web version. In cases
where Microsoft controls the feature set (or behavior), issues may be closed
with an explanation.

We are not affiliated with Microsoft, and this project is not endorsed by them.
It is an independent effort to provide a better experience for Linux users.

Please report bugs and enhancements in the issues section. We will attend them
as soon as possible. Please review the open/close issues before raising a new
one and avoid duplicates. We encourage everyone to join our chat room in
[matrix](https://matrix.to/#/#outlook-for-linux_community:gitter.im) and ask your
questions. That's probably the quickest way to find solutions.

---

[![Gitter chat](https://badges.gitter.im/kranack/outlook-for-linux.png)](https://gitter.im/outlook-for-linux/community "Gitter chat")
![](https://img.shields.io/github/release/kranack/outlook-for-linux.svg?style=flat)
![](https://img.shields.io/github/downloads/kranack/outlook-for-linux/total.svg?style=flat)
![Build & Release](https://github.com/kranack/outlook-for-linux/workflows/Build%20&%20Release/badge.svg)
![](https://img.shields.io/librariesio/github/kranack/outlook-for-linux)
[![Known Vulnerabilities](https://snyk.io//test/github/kranack/outlook-for-linux/badge.svg?targetFile=package.json)](https://snyk.io//test/github/kranack/outlook-for-linux?targetFile=package.json)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kranack_outlook-for-linux&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=kranack_outlook-for-linux)

Unofficial Microsoft Outlook client for Linux using
[`Electron`](https://electronjs.org/). It uses the Web App and wraps it as a
standalone application using Electron.

A clone of https://github.com/IsmaelMartinez/teams-for-linux but for Outlook

## Downloads

Binaries available under [releases](https://github.com/kranack/outlook-for-linux/releases) for `AppImage`, `rpm`, `deb`, `snap`, and `tar.gz`.

In the case of `AppImage`, we recommend using
[`AppImageLauncher`](https://github.com/TheAssassin/AppImageLauncher) for the
best desktop experience.

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/outlook-for-linux)

## Configuration and starting arguments

For detailed configuration options, including startup arguments to enable or
disable specific features, please refer to the
[Configuration README](app/config/README.md) in the config folder.

## Running teams-for-linux in a firejail

A dedicated
[firejail script](https://codeberg.org/lars_uffmann/teams-for-linux-jailed) is
available to help sandbox Teams for Linux. This script can both launch the
application and join meetings with an already running instance.

## Contributing

Contributions, PRs, and suggestions are always welcome!

For information on how to run the app from source or contribute code, please
refer to the [`CONTRIBUTING.md`](CONTRIBUTING.md) file.

## Known issues

A list of known issues and possible workarounds is available in the
[`KNOWN_ISSUES.md`](KNOWN_ISSUES.md) file. Please check it before opening a new
issue.

## History

Read about the history of this project in the [`HISTORY.md`](HISTORY.md) file.

## License

Teams for Linux is released under the [`GPLv3`](LICENSE.md)

Some icons are from
[Icon Duck](https://iconduck.com/sets/hugeicons-essential-free-icons) and are
licensed under `CC BY 4.0`.
