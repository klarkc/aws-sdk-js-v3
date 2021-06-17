"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeOrderableDBInstanceOptions = void 0;
const Neptune_1 = require("../Neptune");
const NeptuneClient_1 = require("../NeptuneClient");
const DescribeOrderableDBInstanceOptionsCommand_1 = require("../commands/DescribeOrderableDBInstanceOptionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeOrderableDBInstanceOptionsCommand_1.DescribeOrderableDBInstanceOptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeOrderableDBInstanceOptions(input, ...args);
};
async function* paginateDescribeOrderableDBInstanceOptions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxRecords"] = config.pageSize;
        if (config.client instanceof Neptune_1.Neptune) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof NeptuneClient_1.NeptuneClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Neptune | NeptuneClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeOrderableDBInstanceOptions = paginateDescribeOrderableDBInstanceOptions;
//# sourceMappingURL=DescribeOrderableDBInstanceOptionsPaginator.js.map