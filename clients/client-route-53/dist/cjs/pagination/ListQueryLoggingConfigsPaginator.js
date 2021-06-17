"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListQueryLoggingConfigs = void 0;
const Route53_1 = require("../Route53");
const Route53Client_1 = require("../Route53Client");
const ListQueryLoggingConfigsCommand_1 = require("../commands/ListQueryLoggingConfigsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListQueryLoggingConfigsCommand_1.ListQueryLoggingConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listQueryLoggingConfigs(input, ...args);
};
async function* paginateListQueryLoggingConfigs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Route53_1.Route53) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof Route53Client_1.Route53Client) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Route53 | Route53Client");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListQueryLoggingConfigs = paginateListQueryLoggingConfigs;
//# sourceMappingURL=ListQueryLoggingConfigsPaginator.js.map