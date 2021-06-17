"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeAffectedEntitiesForOrganization = void 0;
const Health_1 = require("../Health");
const HealthClient_1 = require("../HealthClient");
const DescribeAffectedEntitiesForOrganizationCommand_1 = require("../commands/DescribeAffectedEntitiesForOrganizationCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeAffectedEntitiesForOrganizationCommand_1.DescribeAffectedEntitiesForOrganizationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeAffectedEntitiesForOrganization(input, ...args);
};
async function* paginateDescribeAffectedEntitiesForOrganization(config, input, ...additionalArguments) {
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
exports.paginateDescribeAffectedEntitiesForOrganization = paginateDescribeAffectedEntitiesForOrganization;
//# sourceMappingURL=DescribeAffectedEntitiesForOrganizationPaginator.js.map