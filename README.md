# DepJek - An AI-Powered Chat Interface

A simple and responsive chat interface built with HTML, CSS, and JavaScript, utilizing the OpenRouter API for AI-powered responses.

## Features

- Clean and modern dark-themed design
- Responsive layout that works on both desktop and mobile devices
- Integration with OpenRouter's API for AI-powered chat responses
- Markdown support for rich text formatting in responses
- Loading states and error handling
- Simple and intuitive user interface

## Installation and Setup

1.  Clone the repository:

    ```bash
    git clone [your-repository-url]
    ```

2.  Add your API key from OpenRouter.ai:

    -   Replace `'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'` with your actual API key in the `index.html` file.

3.  Add your logo:

    -   Place your logo image in the `img` directory as `DEPJEK-LOGO.png`.

4.  Update the footer link:

    -   Modify the GitHub profile link in the footer to your own profile or remove it if not needed.

5.  Set up a local server:

    -   Use a local development server to run the project (recommended due to API security policies).

## Usage

1.  Open the application in a web browser.
2.  Send messages to the AI by typing in the input field and clicking the Send button or pressing Enter.
3.  View responses in the chat area below the input.
4.  The chat interface currently uses the `deepseek-r1-distill-llama-70b` model, but you can modify the model in the `sendMessage` function if needed.

## Limitations

-   The application currently uses a free tier API key, which may have usage limits.
-   The design is minimal and could be further customized.
-   Error handling is basic and could be expanded.
-   The chat history is not persisted between sessions.

## NOTE: If the AI is not responding, it means the credits have been used up and the application can't connect to the server.
This project is for demonstration purposes only. You are free to modify and use it according to your needs, but please ensure proper attribution and respect the terms of service for the used API.

## Additional Information

-   For more details about the OpenRouter API, visit [OpenRouter.ai](https://openrouter.ai/).
-   This project was made possible using:
    -   Bootstrap for styling
    -   Marked.js for Markdown parsing
    -   OpenRouter's API for AI responses
