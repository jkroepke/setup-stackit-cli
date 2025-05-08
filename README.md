[![CI](https://github.com/jkroepke/setup-stackit-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/jkroepke/setup-stackit-cli/actions/workflows/ci.yml)

## Setup stackit-cli

GitHub Action for installing
[stackitcloud/stackit-cli](https://github.com/stackitcloud/stackit-cli)

Install a specific version of vals binary on the runner. Acceptable values are
latest or any semantic version string like v2.16.7 Use this action in workflow
to define which version of sops will be used.

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
