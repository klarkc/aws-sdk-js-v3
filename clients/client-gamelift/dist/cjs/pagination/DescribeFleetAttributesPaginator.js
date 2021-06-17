"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeFleetAttributes = void 0;
const GameLift_1 = require("../GameLift");
const GameLiftClient_1 = require("../GameLiftClient");
const DescribeFleetAttributesCommand_1 = require("../commands/DescribeFleetAttributesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeFleetAttributesCommand_1.DescribeFleetAttributesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeFleetAttributes(input, ...args);
};
async function* paginateDescribeFleetAttributes(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof GameLift_1.GameLift) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GameLiftClient_1.GameLiftClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected GameLift | GameLiftClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeFleetAttributes = paginateDescribeFleetAttributes;
//# sourceMappingURL=DescribeFleetAttributesPaginator.js.map