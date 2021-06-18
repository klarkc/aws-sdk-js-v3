import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeBudgetsRequest, DescribeBudgetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeBudgetsCommandInput extends DescribeBudgetsRequest {}
export interface DescribeBudgetsCommandOutput extends DescribeBudgetsResponse, __MetadataBearer {}
/**
 * <p>Lists the budgets that are associated with an account.</p>
 * 		       <important>
 * 			         <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetsCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetsCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetsCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetsCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBudgetsCommand extends $Command<
  DescribeBudgetsCommandInput,
  DescribeBudgetsCommandOutput,
  BudgetsClientResolvedConfig
> {
  readonly input: DescribeBudgetsCommandInput;
  constructor(input: DescribeBudgetsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBudgetsCommandInput, DescribeBudgetsCommandOutput>;
  private serialize;
  private deserialize;
}
