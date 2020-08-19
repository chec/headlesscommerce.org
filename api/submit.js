const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

module.exports = async (req, res) => {
  const { url } = JSON.parse(req.body);

  try {
    const { _rawJson: submission } = await base(
      process.env.AIRTABLE_TABLE_NAME
    ).create({
      url,
      status: process.env.AIRTABLE_DEFAULT_STATUS,
    });

    res.status(201).json({
      message: "Successfully submitted suggestion",
      submission,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
