# [HeadlessCommerce.org](https://headlesscommerce.org)

We’ve made an easy to browse list of services that can be used to build a headless commerce stack. You can bookmark resources to save for later reference.

If you think there are resources that play nice in the headless ecosystem and that we have missed, please feel free to add a recommendation!

- [Browse categories](https://headlesscommerce.org/categories)
- [Browse agencies](https://headlesscommerce.org/agencies)
- [Visit Commerce.js](https://commercejs.com)

## Running locally

```bash
git clone git@github.com:chec/headlesscommerce.org.git
cd headlesscommerce.org
npm install
cp .env.sample .env
npm run dev
```

> _(Optional)_: The `NEXT_PUBLIC_GRAPHCMS_TOKEN` token is configured in GraphCMS to return PUBLISHED entries only. You may want to create a token in development to retrieve DRAFT.
