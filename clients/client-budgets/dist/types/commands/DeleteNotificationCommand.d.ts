import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DeleteNotificationRequest, DeleteNotificationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteNotificationCommandInput extends DeleteNotificationRequest {}
export interface DeleteNotificationCommandOutput extends DeleteNotificationResponse, __MetadataBearer {}
/**
 * <p>Deletes a notification.</p>
 * 		       <important>
 * 			         <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DeleteNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNotificationCommand extends $Command<
  DeleteNotificationCommandInput,
  DeleteNotificationCommandOutput,
  BudgetsClientResolvedConfig
> {
  readonly input: DeleteNotificationCommandInput;
  constructor(input: DeleteNotificationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNotificationCommandInput, DeleteNotificationCommandOutput>;
  private serialize;
  private deserialize;
}
