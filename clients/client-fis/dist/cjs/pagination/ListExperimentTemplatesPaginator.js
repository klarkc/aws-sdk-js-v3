"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListExperimentTemplates = void 0;
const Fis_1 = require("../Fis");
const FisClient_1 = require("../FisClient");
const ListExperimentTemplatesCommand_1 = require("../commands/ListExperimentTemplatesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListExperimentTemplatesCommand_1.ListExperimentTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listExperimentTemplates(input, ...args);
};
async function* paginateListExperimentTemplates(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Fis_1.Fis) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof FisClient_1.FisClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Fis | FisClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListExperimentTemplates = paginateListExperimentTemplates;
//# sourceMappingURL=ListExperimentTemplatesPaginator.js.map