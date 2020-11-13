# ajs

A JavaScript utility library.

Basically Lodash reimplemented for educational purposes. Not intended for production usage.

## Functions

### Chunk

```
chunk([1, 2, 3]) // -> [[1], [2], [3]]
```

### Compact

```
compact([0, 1, false, 2, '', 3]) // -> [1, 2, 3]
```

### Concat

```
concat([1], 2, [3], [[4]]) // -> [1, 2, 3, [4]]
```

### Difference

```
difference([2, 1], [2, 3]) // -> [1]
```

### Drop

```
drop([1, 2, 3], 2) // -> [3]
```

### DropRight

```
dropRight([1, 2, 3]) // -> [1, 2]
```

### Head

```
head([1, 2]) // -> 1
head([]) // -> undefined
```

### Join

```
join(['a', 'b', 'c'], '.') // -> 'a.b.c'
```

### Zip

```
zip(['a', 'b'], [1, 2], [true, false]) // -> [['a', 1, true], ['b', 2, false]]
```

### Unzip

```
unzip([['a', 1, true], ['b', 2, false]]) // -> [['a', 'b'], [1, 2], [true, false]]
```

### Last

```
last([1, 2, 3]) // -> 3
```

### Tail

```
tail([1, 2, 3]) --> [2, 3]
tail([]) // -> []
tail([1]) // -> []
```

### Union

```
union([2, 1], [2, 3], [6]) --> [2, 1, 3, 6]
```

## Tests

```
npm run test
```
