"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeUsers = void 0;
const WorkDocs_1 = require("../WorkDocs");
const WorkDocsClient_1 = require("../WorkDocsClient");
const DescribeUsersCommand_1 = require("../commands/DescribeUsersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeUsersCommand_1.DescribeUsersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeUsers(input, ...args);
};
async function* paginateDescribeUsers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof WorkDocs_1.WorkDocs) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof WorkDocsClient_1.WorkDocsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected WorkDocs | WorkDocsClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeUsers = paginateDescribeUsers;
//# sourceMappingURL=DescribeUsersPaginator.js.map