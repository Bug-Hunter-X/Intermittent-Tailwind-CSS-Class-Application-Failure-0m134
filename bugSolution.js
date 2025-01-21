The issue was caused by a combination of factors, including improperly configured PurgeCSS options and a conflict between a custom CSS rule and a Tailwind CSS class. 

Here's how it was resolved:

1. **PurgeCSS Configuration:** The `purge` option in `tailwind.config.js` was too restrictive, causing Tailwind classes used in certain components to be removed during the build process. The configuration was updated to correctly include all necessary templates and components:

```javascript
module.exports = {
  purge: [ 
    './src/**/*.html', 
    './src/**/*.js', 
    './src/**/*.jsx', 
  ],
  // ... rest of the tailwind config
};
```

2. **CSS Conflict Resolution:** A custom CSS rule with a high specificity was inadvertently overriding a Tailwind CSS class. This rule was adjusted to be more specific or removed altogether, restoring the intended behavior of the Tailwind class.