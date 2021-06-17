"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListCustomRoutingPortMappingsByDestination = void 0;
const GlobalAccelerator_1 = require("../GlobalAccelerator");
const GlobalAcceleratorClient_1 = require("../GlobalAcceleratorClient");
const ListCustomRoutingPortMappingsByDestinationCommand_1 = require("../commands/ListCustomRoutingPortMappingsByDestinationCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListCustomRoutingPortMappingsByDestinationCommand_1.ListCustomRoutingPortMappingsByDestinationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listCustomRoutingPortMappingsByDestination(input, ...args);
};
async function* paginateListCustomRoutingPortMappingsByDestination(config, input, ...additionalArguments) {
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
exports.paginateListCustomRoutingPortMappingsByDestination = paginateListCustomRoutingPortMappingsByDestination;
//# sourceMappingURL=ListCustomRoutingPortMappingsByDestinationPaginator.js.map