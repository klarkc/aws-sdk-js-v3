"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListProjects = void 0;
const IoT1ClickProjects_1 = require("../IoT1ClickProjects");
const IoT1ClickProjectsClient_1 = require("../IoT1ClickProjectsClient");
const ListProjectsCommand_1 = require("../commands/ListProjectsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListProjectsCommand_1.ListProjectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listProjects(input, ...args);
};
async function* paginateListProjects(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof IoT1ClickProjects_1.IoT1ClickProjects) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IoT1ClickProjectsClient_1.IoT1ClickProjectsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IoT1ClickProjects | IoT1ClickProjectsClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListProjects = paginateListProjects;
//# sourceMappingURL=ListProjectsPaginator.js.map