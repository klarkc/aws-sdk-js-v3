"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetEventTypes = void 0;
const FraudDetector_1 = require("../FraudDetector");
const FraudDetectorClient_1 = require("../FraudDetectorClient");
const GetEventTypesCommand_1 = require("../commands/GetEventTypesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetEventTypesCommand_1.GetEventTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getEventTypes(input, ...args);
};
async function* paginateGetEventTypes(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof FraudDetector_1.FraudDetector) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof FraudDetectorClient_1.FraudDetectorClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetEventTypes = paginateGetEventTypes;
//# sourceMappingURL=GetEventTypesPaginator.js.map