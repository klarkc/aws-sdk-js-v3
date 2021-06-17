import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ConfirmSubscriptionInput, ConfirmSubscriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ConfirmSubscriptionCommandInput extends ConfirmSubscriptionInput {
}
export interface ConfirmSubscriptionCommandOutput extends ConfirmSubscriptionResponse, __MetadataBearer {
}
/**
 * <p>Verifies an endpoint owner's intent to receive messages by validating the token sent
 *             to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the
 *             action creates a new subscription and returns its Amazon Resource Name (ARN). This call
 *             requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is
 *             set to "true".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ConfirmSubscriptionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ConfirmSubscriptionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ConfirmSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ConfirmSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ConfirmSubscriptionCommand extends $Command<ConfirmSubscriptionCommandInput, ConfirmSubscriptionCommandOutput, SNSClientResolvedConfig> {
    readonly input: ConfirmSubscriptionCommandInput;
    constructor(input: ConfirmSubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmSubscriptionCommandInput, ConfirmSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
