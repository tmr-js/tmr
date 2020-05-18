## Development guide

Setup projects

```bash
npx lerna bootstrap
```

Build tmr package

```bash
npm -C packages/tmr run build
```

Build example basic

```bash
npm -C examples/basic run build
npm -C examples/basic run start
```