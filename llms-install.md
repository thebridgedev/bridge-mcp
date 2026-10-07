# Installing The Bridge MCP server

The Bridge is a hosted, remote MCP server. There is nothing to download, build or run locally.

- URL: `https://api.thebridge.dev/mcp`
- Transport: Streamable HTTP
- Auth: OAuth 2.0. The client discovers it from `https://api.thebridge.dev/.well-known/oauth-protected-resource/mcp` and registers itself; no API key is needed.

## Cline

Add this to `cline_mcp_settings.json`:

```json
{
  "mcpServers": {
    "bridge": {
      "type": "streamableHttp",
      "url": "https://api.thebridge.dev/mcp"
    }
  }
}
```

On first use, a browser window opens. The user signs in to The Bridge (or signs up at https://thebridge.dev) and approves which apps the connection can reach. No other setup is needed: the server can create the app itself.

If the client does not open a browser sign-in, use an API token instead. The user creates one in the Bridge dashboard (https://app.thebridge.dev/, under **Keys** → **API Tokens**) and adds it as a header:

```json
{
  "mcpServers": {
    "bridge": {
      "type": "streamableHttp",
      "url": "https://api.thebridge.dev/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_TOKEN"
      }
    }
  }
}
```

## Check it works

Ask: "What can The Bridge set up for my app?" The server lists its guided workflows. "Add login to my app" walks through the rest.
