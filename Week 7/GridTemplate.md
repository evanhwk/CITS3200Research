```
Kurtosis Display

**OLD**

// In MongoDB collection Surveys
...
survey_kurt: 7; // or 9, 11
...

// In TS/JS

kurtosis: number;

**NEW**

// In MongoDB collection Surveys

...
survey_kurt: [ 2, 3, 4, 5, 4, 3, 2 ]; 
// Array with 7 elements, or 9, or 11
...

// In TS/JS

kurtosis: [number]; // Array of numbers
```