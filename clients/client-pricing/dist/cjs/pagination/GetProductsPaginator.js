"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetProducts = void 0;
const Pricing_1 = require("../Pricing");
const PricingClient_1 = require("../PricingClient");
const GetProductsCommand_1 = require("../commands/GetProductsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetProductsCommand_1.GetProductsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getProducts(input, ...args);
};
async function* paginateGetProducts(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Pricing_1.Pricing) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof PricingClient_1.PricingClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Pricing | PricingClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetProducts = paginateGetProducts;
//# sourceMappingURL=GetProductsPaginator.js.map