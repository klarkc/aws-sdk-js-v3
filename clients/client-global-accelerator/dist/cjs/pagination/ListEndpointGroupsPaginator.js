"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEndpointGroups = void 0;
const GlobalAccelerator_1 = require("../GlobalAccelerator");
const GlobalAcceleratorClient_1 = require("../GlobalAcceleratorClient");
const ListEndpointGroupsCommand_1 = require("../commands/ListEndpointGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListEndpointGroupsCommand_1.ListEndpointGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listEndpointGroups(input, ...args);
};
async function* paginateListEndpointGroups(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof GlobalAccelerator_1.GlobalAccelerator) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GlobalAcceleratorClient_1.GlobalAcceleratorClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected GlobalAccelerator | GlobalAcceleratorClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListEndpointGroups = paginateListEndpointGroups;
//# sourceMappingURL=ListEndpointGroupsPaginator.js.map