<p align="center"><img src="assets/logo-400.png" width="120" alt="The Bridge"></p>

# The Bridge MCP server

Complete, hosted login, teams, billing and feature flags for your SaaS app. Your AI assistant sets it all up for you.

The Bridge gives your app its whole login, team, billing and feature flag system, hosted and ready to use. Every screen, email and flow is already built. This MCP server lets Claude, Cursor, VS Code, Gemini CLI, Cline or any MCP client turn them on and configure them for your app. From here on, you only build what makes your app different.

**Included:**

- **Login:** sign-in and sign-up pages, Google and Microsoft sign-in, magic links, passkeys, MFA, enterprise SSO and password reset, all on standard OAuth 2.0.
- **Teams:** workspaces for your customers, user invites by email, roles and privileges, and a team management panel.
- **Billing:** plans, prices and usage limits on Stripe, with a plan picker, paywall, upgrade prompts and a customer billing portal.
- **Feature flags:** turn features on per plan, customer or rule, without a deploy.

## Server

| | |
|---|---|
| URL | `https://api.thebridge.dev/mcp` |
| Transport | Streamable HTTP |
| Auth | OAuth 2.0, discovered automatically. No API key needed. |
| Registry | [`dev.thebridge/bridge`](https://registry.modelcontextprotocol.io/v0/servers?search=dev.thebridge) in the official MCP Registry |

This repository holds the listing files only. The server is hosted by The Bridge; there is nothing to install or run.

## Connect

On first use, a browser window opens. Sign in to The Bridge (or sign up at [thebridge.dev](https://thebridge.dev)) and choose which of your apps the connection can reach.

**Claude Code**

```bash
claude mcp add --transport http bridge https://api.thebridge.dev/mcp
```

Then type `/mcp`, select **bridge** and authenticate.

**Claude (claude.ai and Claude Desktop):** Settings → Connectors → **Add custom connector**, with `https://api.thebridge.dev/mcp` as the URL.

**Cursor** (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "bridge": {
      "url": "https://api.thebridge.dev/mcp"
    }
  }
}
```

**VS Code** (`.vscode/mcp.json`)

```json
{
  "servers": {
    "bridge": {
      "type": "http",
      "url": "https://api.thebridge.dev/mcp"
    }
  }
}
```

**Gemini CLI**

```bash
gemini extensions install https://github.com/thebridgedev/bridge-mcp
```

**Cline:** see [llms-install.md](llms-install.md).

Step-by-step guides for every client, including ChatGPT: [thebridge.dev/docs/ai-assistants/mcp](https://thebridge.dev/docs/ai-assistants/mcp/).

## Try

- "Add complete login to my app."
- "Launch a Pro plan at $20 a month with a limit of 1,000 projects."
- "Put the new reports page behind a feature flag and switch it on for selected customers only. Then schedule it to go live for everyone on the Pro plan on November 1."
- "Check whether my app is ready to go live."

Guided workflows cover the common journeys end to end: Add login, Add a paid plan, Add a feature flag, Add teams, Verify setup, What is wrong, and Go live.

## Safety

- You choose which apps a connection can reach when you approve it, and you can revoke it any time under **Keys** in the [dashboard](https://app.thebridge.dev/).
- Deletes are off on connections approved in the browser. They need an API token with delete privileges, and each delete requires naming the target back as confirmation.
- Every tool is labeled read-only or destructive, so your assistant can check with you before it acts.

## Support

- Docs: [thebridge.dev/docs](https://thebridge.dev/docs/)
- Support: support@nebulr.group
- Privacy: [thebridge.dev/legal/privacy](https://thebridge.dev/legal/privacy)

The listing files in this repository are MIT licensed. The Bridge service is subject to its own terms.
