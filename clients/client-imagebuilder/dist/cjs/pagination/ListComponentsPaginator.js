"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListComponents = void 0;
const Imagebuilder_1 = require("../Imagebuilder");
const ImagebuilderClient_1 = require("../ImagebuilderClient");
const ListComponentsCommand_1 = require("../commands/ListComponentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListComponentsCommand_1.ListComponentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listComponents(input, ...args);
};
async function* paginateListComponents(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Imagebuilder_1.Imagebuilder) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ImagebuilderClient_1.ImagebuilderClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListComponents = paginateListComponents;
//# sourceMappingURL=ListComponentsPaginator.js.map