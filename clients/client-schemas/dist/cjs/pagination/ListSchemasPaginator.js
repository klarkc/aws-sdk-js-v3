"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSchemas = void 0;
const Schemas_1 = require("../Schemas");
const SchemasClient_1 = require("../SchemasClient");
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
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof Schemas_1.Schemas) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SchemasClient_1.SchemasClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Schemas | SchemasClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSchemas = paginateListSchemas;
//# sourceMappingURL=ListSchemasPaginator.js.map