"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeFolderContents = void 0;
const WorkDocs_1 = require("../WorkDocs");
const WorkDocsClient_1 = require("../WorkDocsClient");
const DescribeFolderContentsCommand_1 = require("../commands/DescribeFolderContentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeFolderContentsCommand_1.DescribeFolderContentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeFolderContents(input, ...args);
};
async function* paginateDescribeFolderContents(config, input, ...additionalArguments) {
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
exports.paginateDescribeFolderContents = paginateDescribeFolderContents;
//# sourceMappingURL=DescribeFolderContentsPaginator.js.map