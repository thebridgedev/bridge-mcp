# The Bridge

The `bridge` MCP server sets up The Bridge for the user's SaaS app: login, teams, roles, billing on Stripe, usage limits and feature flags. Everything is hosted and already built; the server turns it on and configures it in the user's Bridge workspace.

- The first call opens a browser sign-in to thebridge.dev. The user approves which of their apps the connection can reach.
- Prefer the guided prompts (Add login, Add a paid plan, Add a feature flag, Add teams, Verify setup, What is wrong, Go live) for whole journeys.
- Deletes are not available on a browser-approved connection. They need an API token with delete privileges and a typed confirmation.
- Docs: https://thebridge.dev/docs/ai-assistants/mcp/
