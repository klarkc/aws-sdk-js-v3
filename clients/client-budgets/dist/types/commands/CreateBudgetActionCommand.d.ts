import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { CreateBudgetActionRequest, CreateBudgetActionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateBudgetActionCommandInput extends CreateBudgetActionRequest {}
export interface CreateBudgetActionCommandOutput extends CreateBudgetActionResponse, __MetadataBearer {}
/**
 * <p>
 *          Creates a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new CreateBudgetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBudgetActionCommandInput} for command's `input` shape.
 * @see {@link CreateBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBudgetActionCommand extends $Command<
  CreateBudgetActionCommandInput,
  CreateBudgetActionCommandOutput,
  BudgetsClientResolvedConfig
> {
  readonly input: CreateBudgetActionCommandInput;
  constructor(input: CreateBudgetActionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBudgetActionCommandInput, CreateBudgetActionCommandOutput>;
  private serialize;
  private deserialize;
}
