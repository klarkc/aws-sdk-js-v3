"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeDomainControllers = void 0;
const DirectoryService_1 = require("../DirectoryService");
const DirectoryServiceClient_1 = require("../DirectoryServiceClient");
const DescribeDomainControllersCommand_1 = require("../commands/DescribeDomainControllersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeDomainControllersCommand_1.DescribeDomainControllersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeDomainControllers(input, ...args);
};
async function* paginateDescribeDomainControllers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof DirectoryService_1.DirectoryService) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DirectoryServiceClient_1.DirectoryServiceClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DirectoryService | DirectoryServiceClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeDomainControllers = paginateDescribeDomainControllers;
//# sourceMappingURL=DescribeDomainControllersPaginator.js.map