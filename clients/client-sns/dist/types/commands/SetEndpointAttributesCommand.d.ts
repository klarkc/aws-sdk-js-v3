import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetEndpointAttributesInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetEndpointAttributesCommandInput extends SetEndpointAttributesInput {
}
export interface SetEndpointAttributesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the attributes for an endpoint for a device on one of the supported push
 *             notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetEndpointAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetEndpointAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetEndpointAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetEndpointAttributesCommandInput} for command's `input` shape.
 * @see {@link SetEndpointAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetEndpointAttributesCommand extends $Command<SetEndpointAttributesCommandInput, SetEndpointAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetEndpointAttributesCommandInput;
    constructor(input: SetEndpointAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetEndpointAttributesCommandInput, SetEndpointAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
