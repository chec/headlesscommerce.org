import { NextApiRequest, NextApiResponse } from "next";
import { IncomingWebhook } from "@slack/webhook";

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url, email } = JSON.parse(req.body);

    const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);

    const webhookMessage = {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `You have a new suggestion from *${email}*:`,
          },
          fields: [
            ...(url
              ? [
                  {
                    type: "mrkdwn",
                    text: `*URL:*\n${url}`,
                  },
                ]
              : []),
          ],
        },
      ],
    };

    await webhook.send(webhookMessage);

    res.status(201).end();
  } catch (err) {
    res.status(400).json(err);
  }
};
