"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListKafkaVersions = void 0;
const Kafka_1 = require("../Kafka");
const KafkaClient_1 = require("../KafkaClient");
const ListKafkaVersionsCommand_1 = require("../commands/ListKafkaVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListKafkaVersionsCommand_1.ListKafkaVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listKafkaVersions(input, ...args);
};
async function* paginateListKafkaVersions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Kafka_1.Kafka) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof KafkaClient_1.KafkaClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Kafka | KafkaClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListKafkaVersions = paginateListKafkaVersions;
//# sourceMappingURL=ListKafkaVersionsPaginator.js.map