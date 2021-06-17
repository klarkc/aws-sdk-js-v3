"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSchemas = void 0;
const Personalize_1 = require("../Personalize");
const PersonalizeClient_1 = require("../PersonalizeClient");
const ListSchemasCommand_1 = require("../commands/ListSchemasCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSchemasCommand_1.ListSchemasCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSchemas(input, ...args);
};
async function* paginateListSchemas(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Personalize_1.Personalize) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof PersonalizeClient_1.PersonalizeClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Personalize | PersonalizeClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSchemas = paginateListSchemas;
//# sourceMappingURL=ListSchemasPaginator.js.map