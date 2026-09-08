import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Step, Steps } from '@/components/mintlify';
import * as Base from 'fumadocs-ui/components/codeblock';

/**
 * The three supported ways to set ClawLink up, in the same order and with the
 * same commands as the install page on claw-link.dev. Every integration guide
 * renders this so no single client is treated as the default.
 *
 * `app` is the display name of the integration to connect, e.g. "GitHub".
 */
export function SetupTabs({ app }: { app: string }) {
  return (
    <Tabs items={['Agents', 'Hermes', 'OpenClaw']} groupId="clawlink-client" persist>
      <Tab value="Agents">
        <p>
          Works with any agent. The CLI logs in once and exposes ClawLink to whatever
          you are running — run it yourself, or paste it wherever you chat with your agent.
        </p>
        <Command code="npx -y @useclawlink/cli login" />
        <Steps>
          <Step title="Run the login command">Run it in your terminal, or hand it to your agent to run.</Step>
          <Step title="Approve in your browser">The command prints a link. Open it and approve the device.</Step>
          <Step title={`Connect ${app}`}>
            In the ClawLink dashboard, open <strong>Connections</strong> and connect <strong>{app}</strong>.
          </Step>
          <Step title="Start using it">Ask your agent to use {app}.</Step>
        </Steps>
      </Tab>

      <Tab value="Hermes">
        <p>Install the Hermes plugin, then pair this device.</p>
        <Command code="hermes plugins install ClawLink-HQ/hermes-plugin --enable" />
        <Steps>
          <Step title="Install the plugin">Run the command above.</Step>
          <Step title="Start pairing">
            Run <code>hermes clawlink begin</code>. It prints an approval link.
          </Step>
          <Step title="Approve in your browser">Open the link and approve the device.</Step>
          <Step title="Finish setup">
            Run <code>hermes clawlink finish</code>, then <code>hermes clawlink test</code> to confirm
            ClawLink is ready.
          </Step>
          <Step title={`Connect ${app}`}>
            In the ClawLink dashboard, open <strong>Connections</strong> and connect <strong>{app}</strong>.
          </Step>
        </Steps>
      </Tab>

      <Tab value="OpenClaw">
        <p>
          Install the ClawLink plugin from{' '}
          <a href="https://docs.openclaw.ai/clawhub/" target="_blank" rel="noreferrer noopener">
            ClawHub
          </a>
          .
        </p>
        <Command code="openclaw plugins install clawhub:clawlink-plugin" />
        <Steps>
          <Step title="Install the plugin">Run the command above in OpenClaw.</Step>
          <Step title="Pair ClawLink">Ask OpenClaw to set up ClawLink or pair ClawLink.</Step>
          <Step title="Approve in your browser">Open the link OpenClaw gives you and approve the device.</Step>
          <Step title={`Connect ${app}`}>
            In the ClawLink dashboard, open <strong>Connections</strong> and connect <strong>{app}</strong>.
          </Step>
          <Step title="Start using it">
            Go back to OpenClaw and ask it to use {app}. If the tools are missing, start a fresh chat
            so OpenClaw reloads the plugin.
          </Step>
        </Steps>
      </Tab>
    </Tabs>
  );
}

/** A copyable one-line command, styled like an MDX code block. */
function Command({ code }: { code: string }) {
  return (
    <Base.CodeBlock>
      <Base.Pre>
        <code>{code}</code>
      </Base.Pre>
    </Base.CodeBlock>
  );
}
