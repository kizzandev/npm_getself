# Getself

![npm version](https://img.shields.io/npm/v/getself.svg)
![license](https://img.shields.io/npm/l/getself.svg)
![downloads](https://img.shields.io/npm/dm/getself.svg)

A simple identity function that returns it's input parameter. Useful for various functional programming and utility purposes.

## Installation

You can install the package using npm or yarn:

```bash
npm install getself
# or
yarn add getself
```

## Usage

Import the getself function into your project and use it to return the input parameter as-is:

```js
import getself from 'getself';

console.log(getself('Hello, World!')); // Output: Hello, World!
console.log(getself(42)); // Output: 42
console.log(getself({ key: 'value' })); // Output: { key: 'value' }
```

## API

### getself(param)

Returns the input parameter as-is.

### Parameters

- param (Type): The input parameter to be returned.

### Returns

- (Type): The input parameter.

## Use Cases

- Functional Programming: Use getself in functional programming pipelines where a no-op function is needed.
- Default Callbacks: Provide getself as a default callback function that returns the input value.
- Testing: Useful in testing scenarios where a simple pass-through function is required.

## Example

```js
import getself from 'getself';

// Example: Mock API response in tests
function fetchData(apiCall, callback = getself) {
  const data = apiCall();
  return callback(data);
}

// Mock API call for testing
function mockApiCall() {
  return { id: 1, name: 'Test User', email: 'test@example.com' };
}

// Test case using getself as the callback
const fetchedData = fetchData(mockApiCall);

console.log(fetchedData);
// Output: { id: 1, name: 'Test User', email: 'test@example.com' }

// Example: Custom processing function for testing
function processApiResponse(data) {
  // Custom logic, e.g., extracting only specific fields
  return { id: data.id, name: data.name };
}

// Test case using a custom callback
const processedData = fetchData(mockApiCall, processApiResponse);

console.log(processedData);
// Output: { id: 1, name: 'Test User' }
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.

## License

This project is licensed under the MIT license.

## Contact

For any questions or inquiries, please contact [me](https://github.com/kizzandev).

---

Made with ❤️ by [kizzandev](https://github.com/kizzandev)
