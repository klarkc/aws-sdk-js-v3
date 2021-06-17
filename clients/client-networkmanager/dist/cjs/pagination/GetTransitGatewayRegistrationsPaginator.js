"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetTransitGatewayRegistrations = void 0;
const NetworkManager_1 = require("../NetworkManager");
const NetworkManagerClient_1 = require("../NetworkManagerClient");
const GetTransitGatewayRegistrationsCommand_1 = require("../commands/GetTransitGatewayRegistrationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetTransitGatewayRegistrationsCommand_1.GetTransitGatewayRegistrationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getTransitGatewayRegistrations(input, ...args);
};
async function* paginateGetTransitGatewayRegistrations(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof NetworkManager_1.NetworkManager) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof NetworkManagerClient_1.NetworkManagerClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetTransitGatewayRegistrations = paginateGetTransitGatewayRegistrations;
//# sourceMappingURL=GetTransitGatewayRegistrationsPaginator.js.map