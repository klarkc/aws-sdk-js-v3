"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDatabases = void 0;
const Athena_1 = require("../Athena");
const AthenaClient_1 = require("../AthenaClient");
const ListDatabasesCommand_1 = require("../commands/ListDatabasesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListDatabasesCommand_1.ListDatabasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listDatabases(input, ...args);
};
async function* paginateListDatabases(config, input, ...additionalArguments) {
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
exports.paginateListDatabases = paginateListDatabases;
//# sourceMappingURL=ListDatabasesPaginator.js.map
