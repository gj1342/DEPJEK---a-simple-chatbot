async function sendMessage() {
  const inputField = document.getElementById('userInput');
  const input = inputField.value.trim();
  const responseDiv = document.getElementById('response');
  const initialHeader = document.getElementById('initial-header');

  if (!input) {
    responseDiv.style.display = "none";
    alert('Please enter a message.');
    return;
  }

  initialHeader.style.display = "none";
  responseDiv.style.display = "block";
  responseDiv.innerHTML = 'Reasoning...';

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "HTTP-Referer": "https://yourwebsite.com",  // Replace with your actual site URL or remove if not needed
        "X-Title": "DepJek",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "deepseek/deepseek-r1-distill-llama-70b:free",
        "messages": [
          { "role": "user", "content": input }
        ]
      })
    });

    // Log response for debugging
    console.log("Full API Response:", response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Parsed JSON Data:", data);

    // Ensure the response contains valid choices
    if (data.choices && data.choices.length > 0 && data.choices[0].message?.content) {
      responseDiv.innerHTML = marked.parse(data.choices[0].message.content);
    } else {
      responseDiv.innerHTML = "Error: No valid response received.";
    }

  } catch (error) {
    responseDiv.innerHTML = 'Error: ' + error.message;
    console.error("Fetch Error:", error);
  }
}
