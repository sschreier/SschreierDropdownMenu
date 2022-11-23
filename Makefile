
.PHONY: help
.DEFAULT_GOAL := help

help:
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

release: ## Prepare release
	release-it

pre-release: ## Prepare prerelease default name RC
	@read -p "Enter preRelease name [rc]: " prefix; \
	prefix=$${prefix:-rc}; \
	release-it --preRelease=$$prefix
