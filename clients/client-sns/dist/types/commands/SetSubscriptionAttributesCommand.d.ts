import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetSubscriptionAttributesInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetSubscriptionAttributesCommandInput extends SetSubscriptionAttributesInput {
}
export interface SetSubscriptionAttributesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Allows a subscription owner to set an attribute of the subscription to a new
 *             value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link SetSubscriptionAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetSubscriptionAttributesCommand extends $Command<SetSubscriptionAttributesCommandInput, SetSubscriptionAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetSubscriptionAttributesCommandInput;
    constructor(input: SetSubscriptionAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSubscriptionAttributesCommandInput, SetSubscriptionAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
