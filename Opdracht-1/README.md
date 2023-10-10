## Opdracht 1

Voer de volledige opdracht uit in de map `Opdracht-1`.

- Maak een nieuw npm project aan.
- Installeer de volgende packages/dependencies:
  - `typescript`
- Maak een index.ts bestand aan.
  - Voeg een `console.log` toe met de tekst `Hello World!`.
- Voeg een `npm script` toe aan het `package.json` bestand.
  - Geef de script de naam `transpile`.
  - Geef het script de waarde `tsc index.ts --outDir transpiled && node transpiled/index.js`.
- Voeg een .gitignore toe aan het project.
  - Voeg de map `node_modules` toe aan de `.gitignore`.
  - Voeg de map `transpiled` toe aan de `.gitignore`.

Tips:

- TypeScript is een `devDependency`.

## Verwachtte output in de terminal

Wanneer `npm run transpile` uitgevoerd wordt in de terminal, wordt het volgende verwacht:

```bash
> examen-advanced-frontend-opdrachten@1.0.0 transpile
> tsc index.ts --outDir transpiled && node transpiled/index.js

Hello world!
```