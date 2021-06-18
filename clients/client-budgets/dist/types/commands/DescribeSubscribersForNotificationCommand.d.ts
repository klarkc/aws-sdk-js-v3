import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import {
  DescribeSubscribersForNotificationRequest,
  DescribeSubscribersForNotificationResponse,
} from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeSubscribersForNotificationCommandInput extends DescribeSubscribersForNotificationRequest {}
export interface DescribeSubscribersForNotificationCommandOutput
  extends DescribeSubscribersForNotificationResponse,
    __MetadataBearer {}
/**
 * <p>Lists the subscribers that are associated with a notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeSubscribersForNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeSubscribersForNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeSubscribersForNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubscribersForNotificationCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscribersForNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSubscribersForNotificationCommand extends $Command<
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput,
  BudgetsClientResolvedConfig
> {
  readonly input: DescribeSubscribersForNotificationCommandInput;
  constructor(input: DescribeSubscribersForNotificationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSubscribersForNotificationCommandInput, DescribeSubscribersForNotificationCommandOutput>;
  private serialize;
  private deserialize;
}
