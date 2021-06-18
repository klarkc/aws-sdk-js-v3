import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeBudgetActionsForBudgetRequest, DescribeBudgetActionsForBudgetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeBudgetActionsForBudgetCommandInput extends DescribeBudgetActionsForBudgetRequest {}
export interface DescribeBudgetActionsForBudgetCommandOutput
  extends DescribeBudgetActionsForBudgetResponse,
    __MetadataBearer {}
/**
 * <p>
 *          Describes all of the budget actions for a budget.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionsForBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionsForBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetActionsForBudgetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetActionsForBudgetCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionsForBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBudgetActionsForBudgetCommand extends $Command<
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
  BudgetsClientResolvedConfig
> {
  readonly input: DescribeBudgetActionsForBudgetCommandInput;
  constructor(input: DescribeBudgetActionsForBudgetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBudgetActionsForBudgetCommandInput, DescribeBudgetActionsForBudgetCommandOutput>;
  private serialize;
  private deserialize;
}
