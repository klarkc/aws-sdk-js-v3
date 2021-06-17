"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListRepositoriesInDomain = void 0;
const Codeartifact_1 = require("../Codeartifact");
const CodeartifactClient_1 = require("../CodeartifactClient");
const ListRepositoriesInDomainCommand_1 = require("../commands/ListRepositoriesInDomainCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListRepositoriesInDomainCommand_1.ListRepositoriesInDomainCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listRepositoriesInDomain(input, ...args);
};
async function* paginateListRepositoriesInDomain(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Codeartifact_1.Codeartifact) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeartifactClient_1.CodeartifactClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Codeartifact | CodeartifactClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListRepositoriesInDomain = paginateListRepositoriesInDomain;
//# sourceMappingURL=ListRepositoriesInDomainPaginator.js.map