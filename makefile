main.svg: main.svg.js targets.yaml
	npx svgscript make targets.yaml


main.svg.js: main.svg.ts
	npx tsc main.svg.ts
