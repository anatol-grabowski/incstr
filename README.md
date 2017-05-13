# incstr
Increment string or generate sequential string ids

Default alphabet is `'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'`, it can be changed by changing`incstr.alphabet`.

Pass a string to increment using default alphabet:

    let i = incstr() //"0"
    i = incstr(i) //"1"
    //...
    i = incstr(i) //"Z"
    i = incstr(i) //"00", note not "10"
    i = incstr(i) //"01"


Pass a string and alphabet to use:

    incstr("a", "ab") //"b"
    incstr("b", "ab") //"aa"
    incstr("ccc", "abc") //"aaaa"
    incstr("cc", "ab") //throws ('c' is not in alphabet 'ab')

Generate ids:

    let nextId = incstr.idGenerator({alphabet:'abc'})
    nextId() //'a'
    nextId() //'b'
    nextId() //'c'
    nextId() //'aa'

    let nextId = incstr.idGenerator({alphabet:'ab', prefix:'id_'})
    nextId() //'id_a'
    nextId() //'id_b'
    nextId() //'id_aa'

    let nextId = incstr.idGenerator({lastId:'cc', alphabet:'abc'})
    nextId() //'aaa'


