# React CSS Rules Placement Test

status: Failed

I tried different methods of using CSS in a react component.  
Ultimately I wanted to have the same CSS workflow as `react-native`, which is:

```ts
const styles = StyleSheet.create({
  headingOne: {
    color: "cyan",
  },
});
```

But it doesn't work on plain react. So, there are only two built-in ways to  
use CSS styling in plain react.

- Import it from an external CSS file.
- Use inline CSS with `style={{}}`.

I might revisit this project later.
