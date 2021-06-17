"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeRemediationExecutionStatus = void 0;
const ConfigService_1 = require("../ConfigService");
const ConfigServiceClient_1 = require("../ConfigServiceClient");
const DescribeRemediationExecutionStatusCommand_1 = require("../commands/DescribeRemediationExecutionStatusCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeRemediationExecutionStatusCommand_1.DescribeRemediationExecutionStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeRemediationExecutionStatus(input, ...args);
};
async function* paginateDescribeRemediationExecutionStatus(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof ConfigService_1.ConfigService) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ConfigServiceClient_1.ConfigServiceClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeRemediationExecutionStatus = paginateDescribeRemediationExecutionStatus;
//# sourceMappingURL=DescribeRemediationExecutionStatusPaginator.js.map