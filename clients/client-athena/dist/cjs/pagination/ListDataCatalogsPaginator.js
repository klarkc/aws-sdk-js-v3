"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDataCatalogs = void 0;
const Athena_1 = require("../Athena");
const AthenaClient_1 = require("../AthenaClient");
const ListDataCatalogsCommand_1 = require("../commands/ListDataCatalogsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListDataCatalogsCommand_1.ListDataCatalogsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listDataCatalogs(input, ...args);
};
async function* paginateListDataCatalogs(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena_1.Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient_1.AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListDataCatalogs = paginateListDataCatalogs;
//# sourceMappingURL=ListDataCatalogsPaginator.js.map
