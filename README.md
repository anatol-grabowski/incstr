# incstr
Increment strings or generate sequential string ids in node.js or browser

## Usage

### incstr
```
nextStr = incstr(str,
                 [alphabet=incstr.alphabet],
                 [numberlike=incstr.numberlike])
```
- `str` - string to increment;
- `alphabet` - alphabet to use (default `'A..Za..z0..9'`, v1.0.2 used `'0..9a..zA..Z'`);
- `numberlike` - `'BA'` after `'9'` instead of `'AA'`(default `false`);
- default `alphabet` can be set through `incstr.alphabet`;
- default value for `numberlike` can be set through `incstr.numberlike`;
- works with strings of any length.

### incstr.idGenerator
```
nextId = incstr.idGenerator(options)
id = nextId() // real generator would be too bulky "nextId.next().value"
```
Possible options:
- `options.lastId`;
- `options.alphabet`;
- `options.numberlike`;
- `options.prefix`;
- `options.suffix`.

## Examples
Pass a string to increment using default alphabet:

```
let i = incstr() // "A"
i = incstr(i) // "B"
...
i = incstr(i) // "9"
i = incstr(i) // "AA"
i = incstr(i) // "AB"
```

Pass a string and an alphabet to use:
```
incstr("ccc", "abc") // "aaaa"
incstr("cc", "ab") // throws ('c' is not in alphabet 'ab')
incstr("0", "01") // "1"
incstr("1", "01") // "00", note NOT "10"
incstr("1", "01", true) // "10", numberlike increment
```

Generate ids:

```
const nextId = incstr.idGenerator({})
id1 = nextId() // 'A'
id2 = nextId() // 'B'
```

```
const nextId = incstr.idGenerator({alphabet:'ab', prefix:'id_', suffix:''})
nextId() // 'id_a'
nextId() // 'id_b'
nextId() // 'id_aa'
```

```
const nextId = incstr.idGenerator({lastId:'cc', alphabet:'abc', numberlike: true})
id = nextId() // 'baa'
```
