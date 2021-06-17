"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTapes = void 0;
const StorageGateway_1 = require("../StorageGateway");
const StorageGatewayClient_1 = require("../StorageGatewayClient");
const ListTapesCommand_1 = require("../commands/ListTapesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListTapesCommand_1.ListTapesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listTapes(input, ...args);
};
async function* paginateListTapes(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof StorageGateway_1.StorageGateway) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof StorageGatewayClient_1.StorageGatewayClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListTapes = paginateListTapes;
//# sourceMappingURL=ListTapesPaginator.js.map