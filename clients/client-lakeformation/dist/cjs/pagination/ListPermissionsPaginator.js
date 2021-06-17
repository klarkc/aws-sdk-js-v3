"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPermissions = void 0;
const LakeFormation_1 = require("../LakeFormation");
const LakeFormationClient_1 = require("../LakeFormationClient");
const ListPermissionsCommand_1 = require("../commands/ListPermissionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPermissionsCommand_1.ListPermissionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPermissions(input, ...args);
};
async function* paginateListPermissions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof LakeFormation_1.LakeFormation) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LakeFormationClient_1.LakeFormationClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected LakeFormation | LakeFormationClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPermissions = paginateListPermissions;
//# sourceMappingURL=ListPermissionsPaginator.js.map