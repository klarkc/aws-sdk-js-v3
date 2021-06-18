import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DeleteBudgetActionRequest, DeleteBudgetActionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteBudgetActionCommandInput extends DeleteBudgetActionRequest {}
export interface DeleteBudgetActionCommandOutput extends DeleteBudgetActionResponse, __MetadataBearer {}
/**
 * <p>
 *          Deletes a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DeleteBudgetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBudgetActionCommandInput} for command's `input` shape.
 * @see {@link DeleteBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBudgetActionCommand extends $Command<
  DeleteBudgetActionCommandInput,
  DeleteBudgetActionCommandOutput,
  BudgetsClientResolvedConfig
> {
  readonly input: DeleteBudgetActionCommandInput;
  constructor(input: DeleteBudgetActionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBudgetActionCommandInput, DeleteBudgetActionCommandOutput>;
  private serialize;
  private deserialize;
}
