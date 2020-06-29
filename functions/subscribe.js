const fetch = require("isomorphic-fetch");

exports.handler = async ({ body }) => {
  const data = JSON.parse(body);

  if (!data.name && !data.email)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: `You must provide a name and email` }),
    };

  try {
    const { email, name } = data;

    await fetch(`https://api.buttondown.email/v1/subscribers`, {
      body: JSON.stringify({ email, metadata: { name } }),
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    return {
      statusCode: 201,
      body: JSON.stringify({}),
    };
  } catch ({ message = "Something went wrong" }) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message }),
    };
  }
};
