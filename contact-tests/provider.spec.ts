import { Verifier } from '@pact-foundation/pact';
import * as path from "node:path";

const domain = process.env.DOMAIN || 'http://localhost:3000';

describe('Pact Verification', () => {
  it('validates the expectations of Matching Service', async () => {
    await new Verifier({
      provider: 'example',
      providerBaseUrl: domain,
      requestFilter: (req, res, next) => {
        req.headers['x-api-key'] = '<apikey>';
        next();
      },
      // Commented out until broker setup is implemented.
      // pactBrokerUrl: 'https://<broker-url>.com',
      // Using manual placement of pact files for now: see above comment.
      pactUrls: [
        path.resolve(
          process.cwd(),
          'pact-js-tutorial-consumer-pact-js-tutorial-provider.json',
        ),
      ],
      // Commented out until broker setup is implemented.
      // providerVersionTags: [process.env.PROVIDER_BRANCH],
      // providerVersionBranch: process.env.PROVIDER_BRANCH,
      consumerVersionSelectors: [
        {
          matchingBranch: true,
        },
        {
          branch: process.env.CONSUMER_BRANCH,
        },
        {
          mainBranch: true,
        },
      ],
      enablePending: true,
      // Commented out until broker setup is implemented.
      // publishVerificationResult: false,
      // providerVersion: process.env.PROVIDER_VERSION,
    }).verifyProvider();
  }, 15000);
});
