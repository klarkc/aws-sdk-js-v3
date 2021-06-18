"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeBudgetActionHistories = void 0;
const Budgets_1 = require("../Budgets");
const BudgetsClient_1 = require("../BudgetsClient");
const DescribeBudgetActionHistoriesCommand_1 = require("../commands/DescribeBudgetActionHistoriesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(
    new DescribeBudgetActionHistoriesCommand_1.DescribeBudgetActionHistoriesCommand(input),
    ...args
  );
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeBudgetActionHistories(input, ...args);
};
async function* paginateDescribeBudgetActionHistories(config, input, ...additionalArguments) {
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
exports.paginateDescribeBudgetActionHistories = paginateDescribeBudgetActionHistories;
//# sourceMappingURL=DescribeBudgetActionHistoriesPaginator.js.map
