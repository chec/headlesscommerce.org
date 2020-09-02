import React from "react";
import { Link } from "gatsby";

import SEO from "../components/SEO";
import Header from "../components/Header";

export default function IndexPage() {
  return (
    <React.Fragment>
      <SEO title="About Headless Commerce" />
      <Header title="About Headless Commerce" />

      <div className="max-w-3xl mx-auto">
        <div className="w-full px-6 -mt-6 md:-mt-16">
          <div className="bg-white rounded overflow-hidden shadow mb-4 p-6 md:p-12 mx-auto">
            <div className="prose">
              <p>
                If your business is fast-moving, complex, or just ambitious, a
                headless commerce strategy will help to serve your customers
                faster, approach businesses problems creatively, and stay
                resource lean. As an industry, “eCommerce” has become highly
                stratified, not to mention the “e” is a bit irrelevant now, so
                we built HeadlessCommerce.org for businesses and developers who
                want to explore, learn, and discover modern commerce
                technologies, their complementary services and high level
                concepts.
              </p>
              <p>
                headlesscommerce.org aims to be your ultimate companion guide
                and comprehensive collection of resources to help you navigate
                the headless commerce ecosystem. Our goal is to arm you with the
                knowledge and insights you need to make well-informed decisions
                when evaluating for and implementing a headless commerce
                architecture, without any pretence.
              </p>
              <p>
                We’ve started by collecting a curated list of best-in-class
                headless components for you to use as a starting point for your
                evaluation process. These have been categorized and tagged to
                make it easier for you to filter and drill down into specific
                areas you’re interested in exploring that match your needs. Over
                time we will continue to add additional solutions to this
                curated list. If you would like to contribute please submit a
                resource using the form at the bottom of the home page.
              </p>
              <h3>What’s next?</h3>
              <p>
                Beyond the curated list of resources we’ll be releasing highly
                informative content covering headless commerce best-practices,
                thought leadership, real verified product reviews, interviews,
                buyers guides and more so you can explore an unfiltered look at
                the pros and cons of headless from industry leading experts
                across the space.
              </p>
              <h3>For everyone</h3>
              <p>
                Whilst some of the content found on our site will cater towards
                a technical audience, we understand that explaining headless to
                your business, manager, boss, client or non-technical decision
                maker can be a real challenge. We aim to provide comprehensive
                definitions and explanations to bridge the gap between business
                needs and how technical concepts such as headless can help
                achieve those requirements. Headless commerce solutions aren’t
                just about developers implementing the latest, greatest and
                coolest technology stack but should also solve business needs.
              </p>
              <h3>Who we are</h3>
              <p>
                It’s no secret, headlesscommerce.org is sponsored and maintained
                by <a href="https://commercejs.com/">Commerce.js</a> and we want
                this to be transparent (we put this in the footer of every
                page!). Our goal is to make this site become an unbiased
                knowledge resource that the wider community can contribute
                towards and leverage for the benefit of all. How can we claim to
                be unbiased? It all starts with our vision of the future and the
                principles on which this site and Commerce.js were founded.
              </p>
              <h3>Our Vision</h3>
              <p>
                Headless as a technological concept is still relatively new, and
                with that comes immaturity. Headless commerce as we know it
                today has a relatively high technical barrier to entry when
                compared to traditional SaaS. Headless solutions can also suffer
                from unknown total cost of ownership (TCO) and a difficult to
                estimate return on investment (ROI). How do you know if headless
                if right for you? It’s safe for us to say that headless simply
                isn’t for all businesses or every use case at present.
              </p>
              <p>
                We don’t plan on shying away from those problems and instead
                look to tackle and solve them head on. We fundamentally believe
                that the benefits of headless should be open and accessible to
                everyone, not just enterprise businesses and experienced
                technologists. That’s why we created this site.
              </p>
            </div>

            <div class="rounded-md shadow inline-flex mt-6 w-full">
              <Link
                to="/"
                className="w-full px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-secondary focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 no-underline text-center"
              >
                Discover commerce resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
