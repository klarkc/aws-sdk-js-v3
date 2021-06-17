"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListRecipes = void 0;
const DataBrew_1 = require("../DataBrew");
const DataBrewClient_1 = require("../DataBrewClient");
const ListRecipesCommand_1 = require("../commands/ListRecipesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListRecipesCommand_1.ListRecipesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listRecipes(input, ...args);
};
async function* paginateListRecipes(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof DataBrew_1.DataBrew) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DataBrewClient_1.DataBrewClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DataBrew | DataBrewClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListRecipes = paginateListRecipes;
//# sourceMappingURL=ListRecipesPaginator.js.map