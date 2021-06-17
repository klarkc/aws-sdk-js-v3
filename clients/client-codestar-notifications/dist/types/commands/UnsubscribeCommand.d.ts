import { CodestarNotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodestarNotificationsClient";
import { UnsubscribeRequest, UnsubscribeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnsubscribeCommandInput extends UnsubscribeRequest {
}
export interface UnsubscribeCommandOutput extends UnsubscribeResult, __MetadataBearer {
}
/**
 * <p>Removes an association between a notification rule and an Amazon SNS topic so that
 *             subscribers to that topic stop receiving notifications when the events described in the
 *             rule are triggered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, UnsubscribeCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, UnsubscribeCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new UnsubscribeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnsubscribeCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnsubscribeCommand extends $Command<UnsubscribeCommandInput, UnsubscribeCommandOutput, CodestarNotificationsClientResolvedConfig> {
    readonly input: UnsubscribeCommandInput;
    constructor(input: UnsubscribeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodestarNotificationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnsubscribeCommandInput, UnsubscribeCommandOutput>;
    private serialize;
    private deserialize;
}
