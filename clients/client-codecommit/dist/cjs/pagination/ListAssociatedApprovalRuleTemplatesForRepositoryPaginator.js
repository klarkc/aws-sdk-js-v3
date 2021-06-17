"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAssociatedApprovalRuleTemplatesForRepository = void 0;
const CodeCommit_1 = require("../CodeCommit");
const CodeCommitClient_1 = require("../CodeCommitClient");
const ListAssociatedApprovalRuleTemplatesForRepositoryCommand_1 = require("../commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAssociatedApprovalRuleTemplatesForRepositoryCommand_1.ListAssociatedApprovalRuleTemplatesForRepositoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAssociatedApprovalRuleTemplatesForRepository(input, ...args);
};
async function* paginateListAssociatedApprovalRuleTemplatesForRepository(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof CodeCommit_1.CodeCommit) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeCommitClient_1.CodeCommitClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListAssociatedApprovalRuleTemplatesForRepository = paginateListAssociatedApprovalRuleTemplatesForRepository;
//# sourceMappingURL=ListAssociatedApprovalRuleTemplatesForRepositoryPaginator.js.map