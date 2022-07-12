// disableReactDevTools.ts

// Declare the types if you're using TypeScript
// Remove this block if you're using JavaScript
declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__: any;
  }
}

export function disableReactDevTools() {
  // Check if the React Developer Tools global hook exists
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'object') {
    return;
  }

  for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    if (prop === 'renderers') {
      // this line will remove that one console error

      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();
    } else {
      // Replace all of its properties with a no-op function or a null value
      // depending on their types

      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] =
        typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] === 'function'
          ? () => {
              // do nothing.
            }
          : null;
    }
  }
}
