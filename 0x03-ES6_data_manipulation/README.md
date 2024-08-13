 0x03. ES6 data manipulation
===========================

JavaScriptES6

*   Weight: 1
*   Project will start Aug 12, 2024 6:00 AM, must end by Aug 14, 2024 6:00 AM
*   Checker will be released at Aug 12, 2024 6:00 PM
*   An auto review will be launched at the deadline

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/6ab7bec4727cb5c91257.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240812T095506Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1f3e1755d5a70dbe1c47229d7056b6fac96422d6f1aa2c4e5d44c9803653820c)

Resources
---------

**Read or watch**:

*   [Array](/rltoken/bcXqK1IaIHtrZ45sv0RxsQ "Array")
*   [Typed Array](/rltoken/YZ5RtzAPTaWtF00MYbXuVw "Typed Array")
*   [Set Data Structure](/rltoken/Ch8vq39y9QnlTMr8CymgEg "Set Data Structure")
*   [Map Data Structure](/rltoken/W29MV3f8Ii4HmeJSALNIpw "Map Data Structure")
*   [WeakMap](/rltoken/pSetFVFeIR660GPE0flPdg "WeakMap")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/vFyWo9TJ_4ypOC6uPi2low "explain to anyone"), **without the help of Google**:

*   How to use map, filter and reduce on arrays
*   Typed arrays
*   The Set, Map, and Weak link data structures

Requirements
------------

*   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `js` extension
*   Your code will be tested using `Jest` and the command `npm run test`
*   Your code will be verified against lint using ESLint
*   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
*   All of your functions must be exported

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    

    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3
    

### Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

Configuration files
-------------------

Add the following files to your project directory

### `package.json`

Click to show/hide file contents

    
    {
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "dev": "npx babel-node",
        "test": "jest",
        "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
      },
      "devDependencies": {
        "@babel/core": "^7.6.0",
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
      }
    }

### `babel.config.js`

Click to show/hide file contents

    
    module.exports = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };

### `.eslintrc.js`

Click to show/hide file contents

    
    module.exports = {
      env: {
        browser: false,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:jest/all',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['jest'],
      rules: {
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides:[
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };

### and…

Don’t forget to run `$ npm install` when you have the `package.json`

Tasks
-----

### 0\. Basic list of objects

mandatory

Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array contains the following students in order:

*   `Guillaume`, id: `1`, in `San Francisco`
*   `James`, id: `2`, in `Columbia`
*   `Serena`, id: `5`, in `San Francisco`

    bob@dylan:~$ cat 0-main.js
    import getListStudents from "./0-get_list_students.js";
    
    console.log(getListStudents());
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 0-main.js 
    [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `0-get_list_students.js`

Done?! Get a sandbox

### 1\. More mapping

mandatory

Create a function `getListStudentIds` that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the `map` function on the array.

    bob@dylan:~$ cat 1-main.js
    import getListStudentIds from "./1-get_list_student_ids.js";
    import getListStudents from "./0-get_list_students.js";
    
    console.log(getListStudentIds("hello"));
    console.log(getListStudentIds(getListStudents()));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 1-main.js 
    []
    [ 1, 2, 5 ]
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `1-get_list_student_ids.js`

Done?! Get a sandbox

### 2\. Filter

mandatory

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.

You must use the `filter` function on the array.

    bob@dylan:~$ cat 2-main.js
    import getListStudents from "./0-get_list_students.js";
    import getStudentsByLocation from "./2-get_students_by_loc.js";
    
    const students = getListStudents();
    
    console.log(getStudentsByLocation(students, 'San Francisco'));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 2-main.js 
    [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `2-get_students_by_loc.js`

Done?! Get a sandbox

### 3\. Reduce

mandatory

Create a function `getStudentIdsSum` that returns the sum of all the student ids.

It should accept a list of students (from `getListStudents`) as a parameter.

You must use the `reduce` function on the array.

    bob@dylan:~$ cat 3-main.js
    import getListStudents from "./0-get_list_students.js";
    import getStudentIdsSum from "./3-get_ids_sum.js";
    
    const students = getListStudents();
    const value = getStudentIdsSum(students);
    
    console.log(value);
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 3-main.js 
    8
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `3-get_ids_sum.js`

Done?! Get a sandbox

### 4\. Combine

mandatory

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade

It should accept a list of students (from `getListStudents`), a `city` (String), and `newGrades` (Array of “grade” objects) as parameters.

`newGrades` is an array of objects with this format:

      {
        studentId: 31,
        grade: 78,
      }
    

If a student doesn’t have grade in `newGrades`, the final grade should be `N/A`.

You must use `filter` and `map` combined.

    bob@dylan:~$ cat 4-main.js
    import getListStudents from "./0-get_list_students.js";
    import updateStudentGradeByCity from "./4-update_grade_by_city.js";
    
    console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));
    
    console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 4-main.js 
    [
      {
        id: 1,
        firstName: 'Guillaume',
        location: 'San Francisco',
        grade: 86
      },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    ]
    [
      {
        id: 1,
        firstName: 'Guillaume',
        location: 'San Francisco',
        grade: 'N/A'
      },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    ]
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `4-update_grade_by_city.js`

Done?! Get a sandbox

### 5\. Typed Arrays

mandatory

Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.

It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).

If adding the value is not possible the error `Position outside range` should be thrown.

    bob@dylan:~$ cat 5-main.js
    import createInt8TypedArray from "./5-typed_arrays.js";
    
    console.log(createInt8TypedArray(10, 2, 89));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 5-main.js 
    DataView {
      byteLength: 10,
      byteOffset: 0,
      buffer: ArrayBuffer {
        [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
        byteLength: 10
      }
    }
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `5-typed_arrays.js`

Done?! Get a sandbox

### 6\. Set data structure

mandatory

Create a function named `setFromArray` that returns a `Set` from an array.

It accepts an argument (Array, of any kind of element).

    bob@dylan:~$ cat 6-main.js
    import setFromArray from "./6-set.js";
    
    console.log(setFromArray([12, 32, 15, 78, 98, 15]));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 6-main.js 
    Set { 12, 32, 15, 78, 98 }
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `6-set.js`

Done?! Get a sandbox

### 7\. More set data structure

mandatory

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a `set` (Set) and an `array` (Array).

    bob@dylan:~$ cat 7-main.js
    import hasValuesFromArray from "./7-has_array_values.js";
    
    console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
    console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
    console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 7-main.js 
    true
    false
    false
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `7-has_array_values.js`

Done?! Get a sandbox

### 8\. Clean set

mandatory

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).

It accepts two arguments: a `set` (Set) and a `startString` (String).

When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by `-`.

    bob@dylan:~$ cat 8-main.js
    import cleanSet from "./8-clean_set.js";
    
    console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
    console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 8-main.js 
    jovi-aparte-appetit
    
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `8-clean_set.js`

Done?! Get a sandbox

### 9\. Map data structure

mandatory

Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

    Apples, 10
    Tomatoes, 10
    Pasta, 1
    Rice, 1
    Banana, 5
    

Result:

    bob@dylan:~$ cat 9-main.js
    import groceriesList from "./9-groceries_list.js";
    
    console.log(groceriesList());
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 9-main.js 
    Map {
      'Apples' => 10,
      'Tomatoes' => 10,
      'Pasta' => 1,
      'Rice' => 1,
      'Banana' => 5
    }
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `9-groceries_list.js`

Done?! Get a sandbox

### 10\. More map data structure

mandatory

Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.

    bob@dylan:~$ cat 10-main.js
    import updateUniqueItems from "./10-update_uniq_items.js";
    import groceriesList from "./9-groceries_list.js";
    
    const map = groceriesList();
    console.log(map);
    
    updateUniqueItems(map)
    console.log(map);
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 10-main.js 
    Map {
      'Apples' => 10,
      'Tomatoes' => 10,
      'Pasta' => 1,
      'Rice' => 1,
      'Banana' => 5
    }
    Map {
      'Apples' => 10,
      'Tomatoes' => 10,
      'Pasta' => 100,
      'Rice' => 100,
      'Banana' => 5
    }
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x03-ES6_data_manipulation`
*   File: `10-update_uniq_items.js`

Done?! Get a sandbox

×

#### Recommended Sandbox

Running only

### 1 image(1/2 Sandboxes spawned)

### Ubuntu 18.04 - Node 12Asleep

Ubuntu 18.04 with Node 12

WakeDestroy

Copyright © 2024 ALX, All rights reserved.

×

#### Markdown Guide

#### Emphasis

\*\***bold**\*\*
\*_italics_\*
~~strikethrough~~

#### Headers

\# Big header
## Medium header
### Small header
#### Tiny header

#### Lists

\* Generic list item
\* Generic list item
\* Generic list item

1. Numbered list item
2. Numbered list item
3. Numbered list item

#### Links

\[Text to display\](http://www.example.com)

#### Quotes

\> This is a quote.
> It can span multiple lines!

#### Images

CSS style available: `width, height, opacity`

!\[\](http://www.example.com/image.jpg)
!\[\](http://www.example.com/image.jpg | width: 200px)
!\[\](http://www.example.com/image.jpg | height: 124px | width: 80px | opacity: 0.6)

#### Tables

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

_Or without aligning the columns..._

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |

#### Displaying code

\`var example = "hello!";\`

_Or spanning multiple lines..._

\`\`\`
var example = "hello!";
alert(example);
\`\`\`

window.codySettings = { widget\_id: "9993bc72-2258-452b-a4bf-b2fe1ad5e0d7" }; !function(){var t=window,e=document,a=function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";var a=e.getElementsByTagName("script")\[0\];a.parentNode.insertBefore(t,a)};"complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}();

#cody-wrapper .cody-launcher { position: var(--position) !important; left: var(--left) !important; right: var(--right) !important; bottom: var(--launcher-bottom) !important; border-radius: 9999px !important; border: 0 !important; padding: 0 !important; box-sizing: border-box !important; z-index: 999999 !important; overflow: hidden !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: box-shadow, scale 300ms linear !important; animation: cody-launcher-pulse 4s infinite !important; background-color: var(--background-color) !important; color: var(--text-color) !important; cursor: pointer !important; --icon-margin: 12px; --close-icon-margin: 16px; } #cody-wrapper { --position: fixed; --left: unset; --right: 20px; --launcher-bottom: 20px; --frame-bottom: 90px; --background-color: #FBD647; --text-color: #020617; --shadow-color: 251, 214, 71; } @media screen and (max-width: 512px) { #cody-wrapper { --left: unset; --right: 10px; } } #cody-wrapper .cody-launcher:hover { scale: 1.1 !important; } #cody-wrapper .cody-launcher .cody-close-icon { display: none !important; } #cody-wrapper\[data-launcher-open\] .cody-launcher .cody-icon { display: none !important;; } #cody-wrapper\[data-launcher-open\] .cody-launcher .cody-close-icon { display: block !important;; } #cody-wrapper .cody-iframe { z-index: 99999 !important; transition: visibility .5s, opacity .5s linear !important; background-color: #fff !important; position: fixed !important; left: var(--left) !important; right: var(--right) !important; bottom: var(--frame-bottom) !important; height: 75vh !important; width: 448px !important; border-radius: 10px !important; overflow: hidden !important; box-shadow: 0 2px 4px rgba(0, 18, 26, .08), 0 3px 12px rgba(0, 18, 26, .16), 0 2px 14px 0 rgba(0, 18, 26, .2) !important; border: 0 !important; display: none !important; } @media screen and (max-height: 667px) { #cody-wrapper .cody-iframe { height: calc(100vh - 110px) !important; } } @media screen and (max-width: 448px) { #cody-wrapper .cody-iframe { width: calc(100vw - 20px) !important; } } #cody-wrapper\[data-launcher-open\] .cody-iframe { display: block !important; } @keyframes cody-launcher-pulse { 0%, 100% { box-shadow: 0 0 18px 4px rgba(var(--shadow-color), 0.8); } 50% { box-shadow: 0 0 12px 3px rgba(var(--shadow-color), 0.4); } }