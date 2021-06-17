"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListRoleAliases = void 0;
const IoT_1 = require("../IoT");
const IoTClient_1 = require("../IoTClient");
const ListRoleAliasesCommand_1 = require("../commands/ListRoleAliasesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListRoleAliasesCommand_1.ListRoleAliasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listRoleAliases(input, ...args);
};
async function* paginateListRoleAliases(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.marker = token;
        input["pageSize"] = config.pageSize;
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
        token = page.nextMarker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListRoleAliases = paginateListRoleAliases;
//# sourceMappingURL=ListRoleAliasesPaginator.js.map