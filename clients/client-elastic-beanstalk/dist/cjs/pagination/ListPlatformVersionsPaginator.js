"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPlatformVersions = void 0;
const ElasticBeanstalk_1 = require("../ElasticBeanstalk");
const ElasticBeanstalkClient_1 = require("../ElasticBeanstalkClient");
const ListPlatformVersionsCommand_1 = require("../commands/ListPlatformVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPlatformVersionsCommand_1.ListPlatformVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPlatformVersions(input, ...args);
};
async function* paginateListPlatformVersions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxRecords"] = config.pageSize;
        if (config.client instanceof ElasticBeanstalk_1.ElasticBeanstalk) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ElasticBeanstalkClient_1.ElasticBeanstalkClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ElasticBeanstalk | ElasticBeanstalkClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPlatformVersions = paginateListPlatformVersions;
//# sourceMappingURL=ListPlatformVersionsPaginator.js.map