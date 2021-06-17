"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSuiteDefinitions = void 0;
const IotDeviceAdvisor_1 = require("../IotDeviceAdvisor");
const IotDeviceAdvisorClient_1 = require("../IotDeviceAdvisorClient");
const ListSuiteDefinitionsCommand_1 = require("../commands/ListSuiteDefinitionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSuiteDefinitionsCommand_1.ListSuiteDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSuiteDefinitions(input, ...args);
};
async function* paginateListSuiteDefinitions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof IotDeviceAdvisor_1.IotDeviceAdvisor) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IotDeviceAdvisorClient_1.IotDeviceAdvisorClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IotDeviceAdvisor | IotDeviceAdvisorClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSuiteDefinitions = paginateListSuiteDefinitions;
//# sourceMappingURL=ListSuiteDefinitionsPaginator.js.map