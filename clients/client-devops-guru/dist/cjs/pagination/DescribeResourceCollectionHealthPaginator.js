"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeResourceCollectionHealth = void 0;
const DevOpsGuru_1 = require("../DevOpsGuru");
const DevOpsGuruClient_1 = require("../DevOpsGuruClient");
const DescribeResourceCollectionHealthCommand_1 = require("../commands/DescribeResourceCollectionHealthCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeResourceCollectionHealthCommand_1.DescribeResourceCollectionHealthCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeResourceCollectionHealth(input, ...args);
};
async function* paginateDescribeResourceCollectionHealth(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        if (config.client instanceof DevOpsGuru_1.DevOpsGuru) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DevOpsGuruClient_1.DevOpsGuruClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeResourceCollectionHealth = paginateDescribeResourceCollectionHealth;
//# sourceMappingURL=DescribeResourceCollectionHealthPaginator.js.map