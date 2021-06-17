"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeRegistries = void 0;
const ECRPUBLIC_1 = require("../ECRPUBLIC");
const ECRPUBLICClient_1 = require("../ECRPUBLICClient");
const DescribeRegistriesCommand_1 = require("../commands/DescribeRegistriesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeRegistriesCommand_1.DescribeRegistriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeRegistries(input, ...args);
};
async function* paginateDescribeRegistries(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof ECRPUBLIC_1.ECRPUBLIC) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ECRPUBLICClient_1.ECRPUBLICClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ECRPUBLIC | ECRPUBLICClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeRegistries = paginateDescribeRegistries;
//# sourceMappingURL=DescribeRegistriesPaginator.js.map