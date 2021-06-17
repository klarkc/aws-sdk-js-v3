"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListWebsiteCertificateAuthorities = void 0;
const WorkLink_1 = require("../WorkLink");
const WorkLinkClient_1 = require("../WorkLinkClient");
const ListWebsiteCertificateAuthoritiesCommand_1 = require("../commands/ListWebsiteCertificateAuthoritiesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListWebsiteCertificateAuthoritiesCommand_1.ListWebsiteCertificateAuthoritiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listWebsiteCertificateAuthorities(input, ...args);
};
async function* paginateListWebsiteCertificateAuthorities(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof WorkLink_1.WorkLink) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof WorkLinkClient_1.WorkLinkClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected WorkLink | WorkLinkClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListWebsiteCertificateAuthorities = paginateListWebsiteCertificateAuthorities;
//# sourceMappingURL=ListWebsiteCertificateAuthoritiesPaginator.js.map