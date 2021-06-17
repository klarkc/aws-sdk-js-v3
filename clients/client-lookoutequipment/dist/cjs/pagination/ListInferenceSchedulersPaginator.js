"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListInferenceSchedulers = void 0;
const LookoutEquipment_1 = require("../LookoutEquipment");
const LookoutEquipmentClient_1 = require("../LookoutEquipmentClient");
const ListInferenceSchedulersCommand_1 = require("../commands/ListInferenceSchedulersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListInferenceSchedulersCommand_1.ListInferenceSchedulersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listInferenceSchedulers(input, ...args);
};
async function* paginateListInferenceSchedulers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof LookoutEquipment_1.LookoutEquipment) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LookoutEquipmentClient_1.LookoutEquipmentClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected LookoutEquipment | LookoutEquipmentClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListInferenceSchedulers = paginateListInferenceSchedulers;
//# sourceMappingURL=ListInferenceSchedulersPaginator.js.map