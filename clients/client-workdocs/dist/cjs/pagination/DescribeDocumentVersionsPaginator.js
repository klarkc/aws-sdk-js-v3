"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeDocumentVersions = void 0;
const WorkDocs_1 = require("../WorkDocs");
const WorkDocsClient_1 = require("../WorkDocsClient");
const DescribeDocumentVersionsCommand_1 = require("../commands/DescribeDocumentVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeDocumentVersionsCommand_1.DescribeDocumentVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeDocumentVersions(input, ...args);
};
async function* paginateDescribeDocumentVersions(config, input, ...additionalArguments) {
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
exports.paginateDescribeDocumentVersions = paginateDescribeDocumentVersions;
//# sourceMappingURL=DescribeDocumentVersionsPaginator.js.map