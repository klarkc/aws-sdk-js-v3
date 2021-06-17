"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeHomeRegionControls = void 0;
const MigrationHubConfig_1 = require("../MigrationHubConfig");
const MigrationHubConfigClient_1 = require("../MigrationHubConfigClient");
const DescribeHomeRegionControlsCommand_1 = require("../commands/DescribeHomeRegionControlsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeHomeRegionControlsCommand_1.DescribeHomeRegionControlsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeHomeRegionControls(input, ...args);
};
async function* paginateDescribeHomeRegionControls(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MigrationHubConfig_1.MigrationHubConfig) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MigrationHubConfigClient_1.MigrationHubConfigClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MigrationHubConfig | MigrationHubConfigClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeHomeRegionControls = paginateDescribeHomeRegionControls;
//# sourceMappingURL=DescribeHomeRegionControlsPaginator.js.map