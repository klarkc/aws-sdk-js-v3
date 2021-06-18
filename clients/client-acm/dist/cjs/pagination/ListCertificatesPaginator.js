"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListCertificates = void 0;
const ACM_1 = require("../ACM");
const ACMClient_1 = require("../ACMClient");
const ListCertificatesCommand_1 = require("../commands/ListCertificatesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListCertificatesCommand_1.ListCertificatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listCertificates(input, ...args);
};
async function* paginateListCertificates(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof ACM_1.ACM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ACMClient_1.ACMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ACM | ACMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListCertificates = paginateListCertificates;
//# sourceMappingURL=ListCertificatesPaginator.js.map
