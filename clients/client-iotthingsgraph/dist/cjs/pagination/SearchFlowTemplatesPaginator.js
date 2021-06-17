"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateSearchFlowTemplates = void 0;
const IoTThingsGraph_1 = require("../IoTThingsGraph");
const IoTThingsGraphClient_1 = require("../IoTThingsGraphClient");
const SearchFlowTemplatesCommand_1 = require("../commands/SearchFlowTemplatesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new SearchFlowTemplatesCommand_1.SearchFlowTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.searchFlowTemplates(input, ...args);
};
async function* paginateSearchFlowTemplates(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof IoTThingsGraph_1.IoTThingsGraph) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IoTThingsGraphClient_1.IoTThingsGraphClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IoTThingsGraph | IoTThingsGraphClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateSearchFlowTemplates = paginateSearchFlowTemplates;
//# sourceMappingURL=SearchFlowTemplatesPaginator.js.map