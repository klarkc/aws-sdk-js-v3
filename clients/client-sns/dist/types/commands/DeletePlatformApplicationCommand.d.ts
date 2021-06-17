import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { DeletePlatformApplicationInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePlatformApplicationCommandInput extends DeletePlatformApplicationInput {
}
export interface DeletePlatformApplicationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a platform application object for one of the supported push notification
 *             services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see
 *                 <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS
 *                 Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, DeletePlatformApplicationCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeletePlatformApplicationCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new DeletePlatformApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlatformApplicationCommandInput} for command's `input` shape.
 * @see {@link DeletePlatformApplicationCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePlatformApplicationCommand extends $Command<DeletePlatformApplicationCommandInput, DeletePlatformApplicationCommandOutput, SNSClientResolvedConfig> {
    readonly input: DeletePlatformApplicationCommandInput;
    constructor(input: DeletePlatformApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlatformApplicationCommandInput, DeletePlatformApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
