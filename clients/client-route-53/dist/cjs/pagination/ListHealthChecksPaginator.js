"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListHealthChecks = void 0;
const Route53_1 = require("../Route53");
const Route53Client_1 = require("../Route53Client");
const ListHealthChecksCommand_1 = require("../commands/ListHealthChecksCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListHealthChecksCommand_1.ListHealthChecksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listHealthChecks(input, ...args);
};
async function* paginateListHealthChecks(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxItems"] = config.pageSize;
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
        token = page.NextMarker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListHealthChecks = paginateListHealthChecks;
//# sourceMappingURL=ListHealthChecksPaginator.js.map