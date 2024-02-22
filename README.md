# English to French Translation API

This API translates English text to French using a simple RESTful endpoint.

## Documentation

### API Endpoint

- **POST** `/translate`: Endpoint to handle translation requests.

### Request Format

- Accepts JSON data in the request body with a key-value pair where the key is "text" and the value is the English text to translate.

### Response Format

- Responds with a JSON object containing the translated text in French.

### Error Handling

- Handles missing or invalid request body and errors during translation with appropriate error messages and status codes.

### Testing

- Test the API using tools like Postman or cURL to ensure correct translation and response format.

## Solution Overview

### Implementation Details

- **Language:** TypeScript
- **Framework:** Nodejs , Express.js
- **Translation Service:** LibreTranslate API
- **Deployment:** Deployed to Vercel

### How to Run Locally

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.
4. Access the API at `https://wftranslateenglishtofrench.vercel.app/translate/englishToFrench`.

### Example

Request:

```json
{
  "text": "Hello, how are you?"
}
```
