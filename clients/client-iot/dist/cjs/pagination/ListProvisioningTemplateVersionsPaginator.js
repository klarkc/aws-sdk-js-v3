"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListProvisioningTemplateVersions = void 0;
const IoT_1 = require("../IoT");
const IoTClient_1 = require("../IoTClient");
const ListProvisioningTemplateVersionsCommand_1 = require("../commands/ListProvisioningTemplateVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListProvisioningTemplateVersionsCommand_1.ListProvisioningTemplateVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listProvisioningTemplateVersions(input, ...args);
};
async function* paginateListProvisioningTemplateVersions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof IoT_1.IoT) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IoTClient_1.IoTClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IoT | IoTClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListProvisioningTemplateVersions = paginateListProvisioningTemplateVersions;
//# sourceMappingURL=ListProvisioningTemplateVersionsPaginator.js.map