# gulp task rules

## structure

```sh

gulp.ts/
├── README.md               # on self
├── env.ts                  # tying settings and worker
├── config                  # settings files
│   ├── _interfacees.ts
│   ├── rootPaths.ts
│   └── ...
├── events                  # gulp event tasks
│   ├── build.ts
│   ├── test.ts
│   ├── serve.ts
│   └── ...
└── workers                # gulp singule tasks
    ├── build              # wrapping in worker too large directory
    │   ├── bundle.ts
    │   ├── win.ts
    │   ├── linux.ts
    │   ├── osx.ts
    │   └── ...
    ├── copy.ts
    ├── default.ts
    ├── del.ts
    └── ...

```

## directory and files

> TODO:

### `env.ts` file

> TODO:

### `config/` directory

> TODO:

### `events/` directory

> TODO:

### `workers/` directory

> TODO:
