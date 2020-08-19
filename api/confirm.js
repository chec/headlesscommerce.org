const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

exports.handler = async ({ queryStringParameters }) => {
  const { code: id } = queryStringParameters;

  if (!id)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing verification code" }),
    };

  try {
    const data = await base(process.env.AIRTABLE_TABLE_NAME).update(id, {
      status: process.env.AIRTABLE_CONFIRMED_STATUS,
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
