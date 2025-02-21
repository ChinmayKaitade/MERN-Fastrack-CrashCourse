# Environment Variables in Node.js & Express Setup .env Files and Best Practices 🚀❤️‍🔥

- Environment variables are used to store configuration values like port number, API keys, database URLs, or secrets outside the codebase.
- Most platforms automatically add PORT environment variable which we can use.
- You can access environment variable using process.env.Process is a global object available in Node.js
- To access environment variable, you first have to set in your Operating System.
  - For macOS, and Linux, you can use `export VARIABLE_NAME = "value"` in your terminal
  - On Powershell, you can use `$env:VARIABLE_NAME = "value"`
  - On Command Prompt, you can use `set VARIABLE_NAME = value`
  - If you want to set permanently on Linux, and macOS, you have to include that command in your shell config (~/.bashrc, ~/.zshrc, etc.)
  - If you want to set permanently on Windows, you search "Environment Variables" in windows search.
