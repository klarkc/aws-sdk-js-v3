"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPackageVersions = void 0;
const Codeartifact_1 = require("../Codeartifact");
const CodeartifactClient_1 = require("../CodeartifactClient");
const ListPackageVersionsCommand_1 = require("../commands/ListPackageVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPackageVersionsCommand_1.ListPackageVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPackageVersions(input, ...args);
};
async function* paginateListPackageVersions(config, input, ...additionalArguments) {
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
exports.paginateListPackageVersions = paginateListPackageVersions;
//# sourceMappingURL=ListPackageVersionsPaginator.js.map