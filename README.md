# synpress cache error

1. Install browsers

```sh
yarn
yarn chrome
```

2. Create a cache

```sh
yarn synpress
```

The result:

```sh
Triggering cache creation for: be1495368a393c3a67b7 (connected.setup.{ts,js,mjs})
All wallet setup functions are now cached!
```

3. Run tests

```sh
yarn test
```

`Error: Cache for 18856083c7bff35c9c71 does not exist. Create it first!`

!!! Asking for different cache

This error appears if we have to **sign a signature** during cache creation. 
Check [connected.setup.ts](./test/wallet-setup/connected.setup.ts) comments for more details.