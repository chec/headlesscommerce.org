const fetch = require("isomorphic-fetch");

module.exports = async (req, res) => {
  const data = JSON.parse(req.body);

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

    res.status(201).end();
  } catch ({ message = "Something went wrong" }) {
    res.status(400).json(err);
  }
};
