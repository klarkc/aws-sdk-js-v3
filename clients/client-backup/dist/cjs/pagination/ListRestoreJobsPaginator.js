"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListRestoreJobs = void 0;
const Backup_1 = require("../Backup");
const BackupClient_1 = require("../BackupClient");
const ListRestoreJobsCommand_1 = require("../commands/ListRestoreJobsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListRestoreJobsCommand_1.ListRestoreJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listRestoreJobs(input, ...args);
};
async function* paginateListRestoreJobs(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup_1.Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient_1.BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListRestoreJobs = paginateListRestoreJobs;
//# sourceMappingURL=ListRestoreJobsPaginator.js.map
