"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFragments = void 0;
const KinesisVideoArchivedMedia_1 = require("../KinesisVideoArchivedMedia");
const KinesisVideoArchivedMediaClient_1 = require("../KinesisVideoArchivedMediaClient");
const ListFragmentsCommand_1 = require("../commands/ListFragmentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListFragmentsCommand_1.ListFragmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listFragments(input, ...args);
};
async function* paginateListFragments(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof KinesisVideoArchivedMedia_1.KinesisVideoArchivedMedia) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof KinesisVideoArchivedMediaClient_1.KinesisVideoArchivedMediaClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected KinesisVideoArchivedMedia | KinesisVideoArchivedMediaClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListFragments = paginateListFragments;
//# sourceMappingURL=ListFragmentsPaginator.js.map