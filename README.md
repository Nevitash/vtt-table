# Vtt-Table _(vtt-table)_

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Next.js web application for virtual tabletop encounters, CR calculations, and combatant tracking.

Vtt-Table provides interactive tabletop companion tooling including challenge rating calculation, stat block inspection, encounter difficulty tracking, and magic item visualization.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

Game masters running tabletop campaigns often require rapid balancing calculation tools and digital cards for magic items and monster statblocks. Vtt-Table leverages Next.js 15, React 19, and Tailwind CSS to connect to a backend encounter calculator service and offer responsive DM screens.

## Install

Requires Node.js (v18+) and npm:

`ash
npm install
`

## Usage

Start the development server:

`ash
npm run dev
`

Open http://localhost:3000 with your browser.

Generate updated client API bindings from backend OpenAPI specs:

`ash
./tools/generate_backend_api.sh
`

## Maintainers

[@Nevitash](https://github.com/Nevitash)

## Contributing

PRs accepted. Please open an issue first to discuss large features or API contract changes.

## License

[MIT](LICENSE)
