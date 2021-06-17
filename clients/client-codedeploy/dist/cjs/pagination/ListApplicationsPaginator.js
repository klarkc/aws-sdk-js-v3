"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListApplications = void 0;
const CodeDeploy_1 = require("../CodeDeploy");
const CodeDeployClient_1 = require("../CodeDeployClient");
const ListApplicationsCommand_1 = require("../commands/ListApplicationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListApplicationsCommand_1.ListApplicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listApplications(input, ...args);
};
async function* paginateListApplications(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        if (config.client instanceof CodeDeploy_1.CodeDeploy) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeDeployClient_1.CodeDeployClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodeDeploy | CodeDeployClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListApplications = paginateListApplications;
//# sourceMappingURL=ListApplicationsPaginator.js.map