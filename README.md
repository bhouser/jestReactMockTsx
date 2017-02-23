# jestReactMockTsx

This is a potential bug reproduction: when using Jest to mock React components while using Typescript, the following error is produced:
```
 FAIL  src/__tests__/ParentComponent_test.tsx
  ● renders correctly

    Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in. Check the render method of `ParentComponent`.
      
      at invariant (node_modules/fbjs/lib/invariant.js:44:15)
      at instantiateReactComponent (node_modules/react-test-renderer/lib/instantiateReactComponent.js:77:56)
      at instantiateChild (node_modules/react-test-renderer/lib/ReactChildReconciler.js:44:28)
      at node_modules/react-test-renderer/lib/ReactChildReconciler.js:71:16
      at traverseAllChildrenImpl (node_modules/react-test-renderer/lib/traverseAllChildren.js:77:5)
      at traverseAllChildrenImpl (node_modules/react-test-renderer/lib/traverseAllChildren.js:93:23)
      at traverseAllChildren (node_modules/react-test-renderer/lib/traverseAllChildren.js:172:10)
      at Object.instantiateChildren (node_modules/react-test-renderer/lib/ReactChildReconciler.js:70:7)
      at ReactTestComponent._reconcilerInstantiateChildren (node_modules/react-test-renderer/lib/ReactMultiChild.js:187:41)
      at ReactTestComponent.mountChildren (node_modules/react-test-renderer/lib/ReactMultiChild.js:226:27)

  ✕ renders correctly (14ms)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.78s
Ran all test suites.
  console.error node_modules/fbjs/lib/warning.js:36
    Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in. Check the render method of `ParentComponent`.

```

It contains an `es6` directory with a minimal test setup using Babel which works, and a nearly identical `typescript` directory reproducing the problem.

To run the code in either the `es6` or the `typescript` directory:
```
$ npm install
$ npm test
```
