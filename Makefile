.PHONY: install start build test prettier clean

install:
	npm install

start:
	REACT_APP_ENV=$(env) npm start

build: install
	npm run build

test:
	npm run test

prettier:
	npm run prettier

stylelint:
	npm run stylelint

stylelint-fix:
	npm run stylelint-fix

clean:
	rm -rf build/
