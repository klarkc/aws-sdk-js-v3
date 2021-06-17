"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListHostedZones = void 0;
const Route53_1 = require("../Route53");
const Route53Client_1 = require("../Route53Client");
const ListHostedZonesCommand_1 = require("../commands/ListHostedZonesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListHostedZonesCommand_1.ListHostedZonesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listHostedZones(input, ...args);
};
async function* paginateListHostedZones(config, input, ...additionalArguments) {
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
exports.paginateListHostedZones = paginateListHostedZones;
//# sourceMappingURL=ListHostedZonesPaginator.js.map