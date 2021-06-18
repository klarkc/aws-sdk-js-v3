"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListCertificateAuthorities = void 0;
const ACMPCA_1 = require("../ACMPCA");
const ACMPCAClient_1 = require("../ACMPCAClient");
const ListCertificateAuthoritiesCommand_1 = require("../commands/ListCertificateAuthoritiesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListCertificateAuthoritiesCommand_1.ListCertificateAuthoritiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listCertificateAuthorities(input, ...args);
};
async function* paginateListCertificateAuthorities(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ACMPCA_1.ACMPCA) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ACMPCAClient_1.ACMPCAClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ACMPCA | ACMPCAClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListCertificateAuthorities = paginateListCertificateAuthorities;
//# sourceMappingURL=ListCertificateAuthoritiesPaginator.js.map
