"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListCustomRoutingAccelerators = void 0;
const GlobalAccelerator_1 = require("../GlobalAccelerator");
const GlobalAcceleratorClient_1 = require("../GlobalAcceleratorClient");
const ListCustomRoutingAcceleratorsCommand_1 = require("../commands/ListCustomRoutingAcceleratorsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListCustomRoutingAcceleratorsCommand_1.ListCustomRoutingAcceleratorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listCustomRoutingAccelerators(input, ...args);
};
async function* paginateListCustomRoutingAccelerators(config, input, ...additionalArguments) {
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
exports.paginateListCustomRoutingAccelerators = paginateListCustomRoutingAccelerators;
//# sourceMappingURL=ListCustomRoutingAcceleratorsPaginator.js.map