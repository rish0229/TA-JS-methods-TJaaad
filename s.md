1.) [ReferenceError], because `let` is blocked scope.

2.) 'John', because `var` is not block scoped.

3.) [ReferenceError], because `const` is block scoped.

4.) [ReferenceError], because `num` is defined in block scope;

5.) 221, because `var` is not block scoped;

6.) [ReferenceError], because `let` is block scoped;

7.) 20, `var` is not block scoped;

8.) [TypeError], because `const` is constant i.e, can't change is value;

9.) [ReferenceError], because `let` is block scoped;

10.) 'John', because `var` is not block scoped;

11.) [ReferenceError], because `const` is block scoped;

12.) [TypeError], because `const` is constant i.e, can't change is value;

13.) [TypeError], because `const` is constant i.e, can't change is value;

14.) `undefined`, because there is no `return` statement in `function` first.

15.) again `undefined`, no `return` statement.

16.) Now there will be [ReferenceError], because two is in block scope.

17.) 3

18.) 102, because in `function` second(2) the value of `one` is redefined.

19.) 105, variables `one` and `two` are in the same scope so no need to bubble out now for variable `three` it will bubble out and find the value to be 3.

20.) 402, `one` is in the same scope so no need to bubble out, for `two` it will bubble out and find the value to be 2 and for `three` it will again bubble out and find it to be 300.
