"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeAddresses = void 0;
const Snowball_1 = require("../Snowball");
const SnowballClient_1 = require("../SnowballClient");
const DescribeAddressesCommand_1 = require("../commands/DescribeAddressesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeAddressesCommand_1.DescribeAddressesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeAddresses(input, ...args);
};
async function* paginateDescribeAddresses(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Snowball_1.Snowball) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SnowballClient_1.SnowballClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Snowball | SnowballClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeAddresses = paginateDescribeAddresses;
//# sourceMappingURL=DescribeAddressesPaginator.js.map