import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetPlatformApplicationAttributesInput, GetPlatformApplicationAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPlatformApplicationAttributesCommandInput extends GetPlatformApplicationAttributesInput {
}
export interface GetPlatformApplicationAttributesCommandOutput extends GetPlatformApplicationAttributesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the attributes of the platform application object for the supported push
 *             notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetPlatformApplicationAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetPlatformApplicationAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetPlatformApplicationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlatformApplicationAttributesCommandInput} for command's `input` shape.
 * @see {@link GetPlatformApplicationAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPlatformApplicationAttributesCommand extends $Command<GetPlatformApplicationAttributesCommandInput, GetPlatformApplicationAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: GetPlatformApplicationAttributesCommandInput;
    constructor(input: GetPlatformApplicationAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlatformApplicationAttributesCommandInput, GetPlatformApplicationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
