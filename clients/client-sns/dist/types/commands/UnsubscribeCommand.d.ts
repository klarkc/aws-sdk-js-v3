import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { UnsubscribeInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnsubscribeCommandInput extends UnsubscribeInput {
}
export interface UnsubscribeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a subscription. If the subscription requires authentication for deletion, only
 *             the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature
 *             is required. If the <code>Unsubscribe</code> call does not require authentication and
 *             the requester is not the subscription owner, a final cancellation message is delivered
 *             to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the
 *                 <code>Unsubscribe</code> request was unintended.</p>
 *         <p>This action is throttled at 100 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, UnsubscribeCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, UnsubscribeCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new UnsubscribeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnsubscribeCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnsubscribeCommand extends $Command<UnsubscribeCommandInput, UnsubscribeCommandOutput, SNSClientResolvedConfig> {
    readonly input: UnsubscribeCommandInput;
    constructor(input: UnsubscribeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnsubscribeCommandInput, UnsubscribeCommandOutput>;
    private serialize;
    private deserialize;
}
