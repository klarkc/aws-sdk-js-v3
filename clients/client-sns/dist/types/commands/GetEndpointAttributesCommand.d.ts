import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetEndpointAttributesInput, GetEndpointAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEndpointAttributesCommandInput extends GetEndpointAttributesInput {
}
export interface GetEndpointAttributesCommandOutput extends GetEndpointAttributesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the endpoint attributes for a device on one of the supported push
 *             notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetEndpointAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetEndpointAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetEndpointAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEndpointAttributesCommandInput} for command's `input` shape.
 * @see {@link GetEndpointAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEndpointAttributesCommand extends $Command<GetEndpointAttributesCommandInput, GetEndpointAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: GetEndpointAttributesCommandInput;
    constructor(input: GetEndpointAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEndpointAttributesCommandInput, GetEndpointAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
