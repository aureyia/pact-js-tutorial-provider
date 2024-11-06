FROM node:20
ARG VERSION=2.3.1

RUN curl -LO https://github.com/pact-foundation/pact-ruby-standalone/releases/download/v${VERSION}/pact-${VERSION}-linux-x86_64.tar.gz; \
    tar -C /usr/local -xzf pact-${VERSION}-linux-x86_64.tar.gz; \
    rm pact-${VERSION}-linux-x86_64.tar.gz

ENV PATH /usr/local/pact/bin:$PATH

ADD contract-tests ./
RUN npm ci
