#!/bin/bash
cp _config_test.yml _config.yml
bundle exec jekyll serve
cp _config_prod.yml _config.yml
