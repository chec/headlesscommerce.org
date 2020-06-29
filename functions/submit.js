const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

exports.handler = async ({ body }) => {
  const { url } = JSON.parse(body);

  try {
    const { _rawJson: submission } = await base(
      process.env.AIRTABLE_TABLE_NAME
    ).create({
      url,
      status: process.env.AIRTABLE_DEFAULT_STATUS,
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: `Successfully submitted suggestion`,
        submission,
      }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err.message || "Something went wrong"),
    };
  }
};
