"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeDBEngineVersions = void 0;
const DocDB_1 = require("../DocDB");
const DocDBClient_1 = require("../DocDBClient");
const DescribeDBEngineVersionsCommand_1 = require("../commands/DescribeDBEngineVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeDBEngineVersionsCommand_1.DescribeDBEngineVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeDBEngineVersions(input, ...args);
};
async function* paginateDescribeDBEngineVersions(config, input, ...additionalArguments) {
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
exports.paginateDescribeDBEngineVersions = paginateDescribeDBEngineVersions;
//# sourceMappingURL=DescribeDBEngineVersionsPaginator.js.map