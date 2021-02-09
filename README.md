Simulates a scenario where the project depends on `@emotion/core`, but a child-dependency depends on `@emotion/css` @v11, resulting in that version being hoisted and causing project code, transpiled with `babel-plugin-emotion`, to TypeError with:

```
TypeError: (0 , _css2.default) is not a function
```

Due to the interface differences between `@emotion/css` v10 and v11.

Run `yarn && yarn build-and-execute` to trigger the error.