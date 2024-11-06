import { Verifier } from '@pact-foundation/pact';

const domain = process.env.DOMAIN || 'https://www.example.com';

describe('Pact Verification', () => {
  it('validates the expectations of Matching Service', async () => {
    await new Verifier({
      provider: 'example',
      providerBaseUrl: domain,
      requestFilter: (req, res, next) => {
        req.headers['x-api-key'] = '<apikey>';
        next();
      },
      pactBrokerUrl: 'https://<broker-url>.com',
      providerVersionTags: [process.env.PROVIDER_BRANCH],
      providerVersionBranch: process.env.PROVIDER_BRANCH,
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
      publishVerificationResult: true,
      providerVersion: process.env.PROVIDER_VERSION,
    }).verifyProvider();
  }, 15000);
});
