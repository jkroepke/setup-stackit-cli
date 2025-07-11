[![CI](https://github.com/jkroepke/setup-stackit-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/jkroepke/setup-stackit-cli/actions/workflows/ci.yml)
[![GitHub license](https://img.shields.io/github/license/jkroepke/setup-stackit-cli?style=flat&logo=github)](https://github.com/jkroepke/setup-stackit-cli/blob/master/LICENSE)
[![Current Release](https://img.shields.io/github/release/jkroepke/setup-stackit-cli.svg?style=flat&logo=github)](https://github.com/jkroepke/setup-stackit-cli/releases/latest)
[![GitHub Repo stars](https://img.shields.io/github/stars/jkroepke/setup-stackit-cli?style=flat&logo=github)](https://github.com/jkroepke/setup-stackit-cli/stargazers)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Setup stackit-cli

⭐ Don't forget to star this repository! ⭐

## About

GitHub Action for installing
[stackitcloud/stackit-cli](https://github.com/stackitcloud/stackit-cli)

Install a specific version of stackit-cli binary on the runner. Acceptable
values are latest or any semantic version string like v2.16.7. Use this action
in workflow to define which version of stackit-cli will be used.

```yaml
- name: Stackit Binary Installer
  uses: jkroepke/setup-stackit-cli@v1
  with:
    version: '<version>' # default is latest stable
  id: install
```

The cached binary path is prepended to the PATH environment variable as well as
stored in the path output variable. Refer to the action metadata file for
details about all the inputs
[here](https://github.com/jkroepke/setup-stackit-cli/blob/main/action.yml).
