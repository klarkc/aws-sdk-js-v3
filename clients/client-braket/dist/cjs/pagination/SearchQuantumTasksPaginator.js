"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateSearchQuantumTasks = void 0;
const Braket_1 = require("../Braket");
const BraketClient_1 = require("../BraketClient");
const SearchQuantumTasksCommand_1 = require("../commands/SearchQuantumTasksCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new SearchQuantumTasksCommand_1.SearchQuantumTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.searchQuantumTasks(input, ...args);
};
async function* paginateSearchQuantumTasks(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Braket_1.Braket) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BraketClient_1.BraketClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Braket | BraketClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateSearchQuantumTasks = paginateSearchQuantumTasks;
//# sourceMappingURL=SearchQuantumTasksPaginator.js.map
