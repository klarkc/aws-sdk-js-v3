"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeReportDefinitions = void 0;
const CostAndUsageReportService_1 = require("../CostAndUsageReportService");
const CostAndUsageReportServiceClient_1 = require("../CostAndUsageReportServiceClient");
const DescribeReportDefinitionsCommand_1 = require("../commands/DescribeReportDefinitionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeReportDefinitionsCommand_1.DescribeReportDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeReportDefinitions(input, ...args);
};
async function* paginateDescribeReportDefinitions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof CostAndUsageReportService_1.CostAndUsageReportService) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CostAndUsageReportServiceClient_1.CostAndUsageReportServiceClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CostAndUsageReportService | CostAndUsageReportServiceClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeReportDefinitions = paginateDescribeReportDefinitions;
//# sourceMappingURL=DescribeReportDefinitionsPaginator.js.map