"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeDBSubnetGroups = void 0;
const DocDB_1 = require("../DocDB");
const DocDBClient_1 = require("../DocDBClient");
const DescribeDBSubnetGroupsCommand_1 = require("../commands/DescribeDBSubnetGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeDBSubnetGroupsCommand_1.DescribeDBSubnetGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeDBSubnetGroups(input, ...args);
};
async function* paginateDescribeDBSubnetGroups(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxRecords"] = config.pageSize;
        if (config.client instanceof DocDB_1.DocDB) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DocDBClient_1.DocDBClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DocDB | DocDBClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeDBSubnetGroups = paginateDescribeDBSubnetGroups;
//# sourceMappingURL=DescribeDBSubnetGroupsPaginator.js.map