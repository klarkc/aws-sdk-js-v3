import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { SendTestEventNotificationRequest, SendTestEventNotificationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendTestEventNotificationCommandInput extends SendTestEventNotificationRequest {
}
export interface SendTestEventNotificationCommandOutput extends SendTestEventNotificationResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send
 *             a notification message as if a HIT event occurred, according to the provided
 *             notification specification. This allows you to test notifications without
 *             setting up notifications for a real HIT type and trying to trigger them using the website.
 *             When you call this operation, the service attempts to send the test notification immediately.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, SendTestEventNotificationCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, SendTestEventNotificationCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new SendTestEventNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendTestEventNotificationCommandInput} for command's `input` shape.
 * @see {@link SendTestEventNotificationCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendTestEventNotificationCommand extends $Command<SendTestEventNotificationCommandInput, SendTestEventNotificationCommandOutput, MTurkClientResolvedConfig> {
    readonly input: SendTestEventNotificationCommandInput;
    constructor(input: SendTestEventNotificationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendTestEventNotificationCommandInput, SendTestEventNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
