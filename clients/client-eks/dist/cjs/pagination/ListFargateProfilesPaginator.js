"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFargateProfiles = void 0;
const EKS_1 = require("../EKS");
const EKSClient_1 = require("../EKSClient");
const ListFargateProfilesCommand_1 = require("../commands/ListFargateProfilesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListFargateProfilesCommand_1.ListFargateProfilesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listFargateProfiles(input, ...args);
};
async function* paginateListFargateProfiles(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof EKS_1.EKS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof EKSClient_1.EKSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected EKS | EKSClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListFargateProfiles = paginateListFargateProfiles;
//# sourceMappingURL=ListFargateProfilesPaginator.js.map