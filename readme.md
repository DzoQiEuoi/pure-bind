# Pure Bind

Binds argments to functions with memoization of infinite depth.

## API

### Syntax

``bind(fnc, arg1[, arg2[, ...]])``

### Parameters

#### fnc
The function to be bound

#### arg1, arg2, ...
 The arguments to bind

### Returns

A copy of the function with the arguments bound to it and ``this`` set to ``undefined``. If these argument have been bound to the function before, a cached copy with the same reference is returned.

## Example usage

```
import bind from 'pure-bind';

class MyComponent extends React.Component {
    render() {
        return (
            <MySubComponent onClick={bind(setValue, 1)} />
        )
    }
}
```

No matter how many times MyComponent is rerendered, MySubComponent will always get an onClick prop with the same refernce allowing it to perform a strict equality check in its shouldComponentUpate logic.