"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeCases = void 0;
const Support_1 = require("../Support");
const SupportClient_1 = require("../SupportClient");
const DescribeCasesCommand_1 = require("../commands/DescribeCasesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeCasesCommand_1.DescribeCasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeCases(input, ...args);
};
async function* paginateDescribeCases(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Support_1.Support) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SupportClient_1.SupportClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Support | SupportClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeCases = paginateDescribeCases;
//# sourceMappingURL=DescribeCasesPaginator.js.map