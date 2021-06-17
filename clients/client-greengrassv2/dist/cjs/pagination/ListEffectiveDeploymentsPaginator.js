"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEffectiveDeployments = void 0;
const GreengrassV2_1 = require("../GreengrassV2");
const GreengrassV2Client_1 = require("../GreengrassV2Client");
const ListEffectiveDeploymentsCommand_1 = require("../commands/ListEffectiveDeploymentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListEffectiveDeploymentsCommand_1.ListEffectiveDeploymentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listEffectiveDeployments(input, ...args);
};
async function* paginateListEffectiveDeployments(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof GreengrassV2_1.GreengrassV2) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GreengrassV2Client_1.GreengrassV2Client) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected GreengrassV2 | GreengrassV2Client");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListEffectiveDeployments = paginateListEffectiveDeployments;
//# sourceMappingURL=ListEffectiveDeploymentsPaginator.js.map