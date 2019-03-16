#!/usr/bin/env bash
curl -X POST \
                --header "Content-Type: application/json" \
                -d '{"name":"TEST_ENV_VAR", "value":"env_var_set_using_the_api"}' \
                https://circleci.com/api/v1.1/project/github/codergolem/circleci-demo/envvar?circle-token=${CIRCLE_CI_TOKEN}