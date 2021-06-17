"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSigningPlatforms = void 0;
const Signer_1 = require("../Signer");
const SignerClient_1 = require("../SignerClient");
const ListSigningPlatformsCommand_1 = require("../commands/ListSigningPlatformsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSigningPlatformsCommand_1.ListSigningPlatformsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSigningPlatforms(input, ...args);
};
async function* paginateListSigningPlatforms(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Signer_1.Signer) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SignerClient_1.SignerClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Signer | SignerClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSigningPlatforms = paginateListSigningPlatforms;
//# sourceMappingURL=ListSigningPlatformsPaginator.js.map