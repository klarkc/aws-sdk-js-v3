"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListBrokers = void 0;
const Mq_1 = require("../Mq");
const MqClient_1 = require("../MqClient");
const ListBrokersCommand_1 = require("../commands/ListBrokersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListBrokersCommand_1.ListBrokersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listBrokers(input, ...args);
};
async function* paginateListBrokers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Mq_1.Mq) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MqClient_1.MqClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Mq | MqClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListBrokers = paginateListBrokers;
//# sourceMappingURL=ListBrokersPaginator.js.map