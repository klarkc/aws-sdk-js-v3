import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { ExecuteBudgetActionRequest, ExecuteBudgetActionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ExecuteBudgetActionCommandInput extends ExecuteBudgetActionRequest {}
export interface ExecuteBudgetActionCommandOutput extends ExecuteBudgetActionResponse, __MetadataBearer {}
/**
 * <p>
 *          Executes a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, ExecuteBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, ExecuteBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new ExecuteBudgetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteBudgetActionCommandInput} for command's `input` shape.
 * @see {@link ExecuteBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExecuteBudgetActionCommand extends $Command<
  ExecuteBudgetActionCommandInput,
  ExecuteBudgetActionCommandOutput,
  BudgetsClientResolvedConfig
> {
  readonly input: ExecuteBudgetActionCommandInput;
  constructor(input: ExecuteBudgetActionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteBudgetActionCommandInput, ExecuteBudgetActionCommandOutput>;
  private serialize;
  private deserialize;
}
