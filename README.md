# Allsource component repo

Contains bit.dev components used throughout the Allsource frontend nodes.

### File structure
Under `main`:
- `partials` contains all shared react components like buttons
- `style` contains components that are shared css files
- `config` contains shared configs like axios configs

`global` contains the react bit config

### Local development
- `bit link --target ../PATH/TO/PROJECT` replaces node modules in target with sim links to components here
- `bit watch` automatically compiles your components so you get live updates in your target project

### Usefull commands

- `bit link --rewire` to replace local imports with external
- `bit tag` to set versions
- `bit export` to export to bit.cloud
- `bit add` to add component
- `bit create react-component-js {name}` to create component