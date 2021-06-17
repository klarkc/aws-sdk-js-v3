"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeEventsForOrganization = void 0;
const Health_1 = require("../Health");
const HealthClient_1 = require("../HealthClient");
const DescribeEventsForOrganizationCommand_1 = require("../commands/DescribeEventsForOrganizationCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeEventsForOrganizationCommand_1.DescribeEventsForOrganizationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeEventsForOrganization(input, ...args);
};
async function* paginateDescribeEventsForOrganization(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Health_1.Health) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof HealthClient_1.HealthClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Health | HealthClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeEventsForOrganization = paginateDescribeEventsForOrganization;
//# sourceMappingURL=DescribeEventsForOrganizationPaginator.js.map