"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListNotificationRules = void 0;
const CodestarNotifications_1 = require("../CodestarNotifications");
const CodestarNotificationsClient_1 = require("../CodestarNotificationsClient");
const ListNotificationRulesCommand_1 = require("../commands/ListNotificationRulesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListNotificationRulesCommand_1.ListNotificationRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listNotificationRules(input, ...args);
};
async function* paginateListNotificationRules(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof CodestarNotifications_1.CodestarNotifications) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodestarNotificationsClient_1.CodestarNotificationsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodestarNotifications | CodestarNotificationsClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListNotificationRules = paginateListNotificationRules;
//# sourceMappingURL=ListNotificationRulesPaginator.js.map