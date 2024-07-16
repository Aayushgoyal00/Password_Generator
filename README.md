# Random Password Generator

This project is a web-based random password generator. It allows users to generate strong passwords with options to include uppercase letters, lowercase letters, numbers, and symbols. The generated password can be easily copied to the clipboard for use.

## Live Demo

You can access the live demo of the project [here](https://aayushgoyal00.github.io/Password_Generator/).

## Features

- **Generate Strong Passwords**: Customize the length (up to 20 characters) and character sets (uppercase, lowercase, numbers, symbols) for your password.
- **Random Shuffle**: Uses a robust randomization algorithm to shuffle the generated password for added security.
- **Copy to Clipboard**: Easily copy the generated password to the clipboard with a single click.

## Demo

![Password Generator Demo](./screenshot_webpage.png) 

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Aayushgoyal00/Password_Generator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd password-generator
    ```
3. Open `index.html` in your web browser.

## Usage

1. Open the web page.
2. Set the desired password length and character options.
3. Click "Generate Password" to create a new password.
4. Click the "Copy to Clipboard" button to copy the password.

## Code Explanation

### Password Generation

The password is generated using a combination of selected character sets. Here's a breakdown of the password generation process:

1. **Character Set Selection**: Based on user preferences, different character sets are selected (uppercase, lowercase, numbers, symbols).
2. **Random Selection**: Characters are randomly selected from the combined character set until the desired password length is reached.
3. **Shuffling**: The Fisher-Yates algorithm is used to shuffle the password to ensure randomness.

### Shuffling Algorithm

```javascript
let passwordArray = password.split('');

for (let a = passwordArray.length - 1; a > 0; a--) {
    let index1 = Math.floor(Math.random() * (a + 1));

    // Swap variables
    let temp = passwordArray[index1];
    passwordArray[index1] = passwordArray[a];
    passwordArray[a] = temp;
}

password = passwordArray.join('');
