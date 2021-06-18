"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeNotificationsForBudget = void 0;
const Budgets_1 = require("../Budgets");
const BudgetsClient_1 = require("../BudgetsClient");
const DescribeNotificationsForBudgetCommand_1 = require("../commands/DescribeNotificationsForBudgetCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(
    new DescribeNotificationsForBudgetCommand_1.DescribeNotificationsForBudgetCommand(input),
    ...args
  );
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeNotificationsForBudget(input, ...args);
};
async function* paginateDescribeNotificationsForBudget(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Budgets_1.Budgets) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BudgetsClient_1.BudgetsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Budgets | BudgetsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateDescribeNotificationsForBudget = paginateDescribeNotificationsForBudget;
//# sourceMappingURL=DescribeNotificationsForBudgetPaginator.js.map
