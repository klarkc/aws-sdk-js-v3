import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeBudgetRequest, DescribeBudgetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeBudgetCommandInput extends DescribeBudgetRequest {}
export interface DescribeBudgetCommandOutput extends DescribeBudgetResponse, __MetadataBearer {}
/**
 * <p>Describes a budget.</p>
 * 		       <important>
 * 			         <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBudgetCommand extends $Command<
  DescribeBudgetCommandInput,
  DescribeBudgetCommandOutput,
  BudgetsClientResolvedConfig
> {
  readonly input: DescribeBudgetCommandInput;
  constructor(input: DescribeBudgetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBudgetCommandInput, DescribeBudgetCommandOutput>;
  private serialize;
  private deserialize;
}
