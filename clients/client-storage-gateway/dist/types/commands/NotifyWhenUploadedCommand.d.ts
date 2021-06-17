import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { NotifyWhenUploadedInput, NotifyWhenUploadedOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface NotifyWhenUploadedCommandInput extends NotifyWhenUploadedInput {
}
export interface NotifyWhenUploadedCommandOutput extends NotifyWhenUploadedOutput, __MetadataBearer {
}
/**
 * <p>Sends you notification through CloudWatch Events when all files written to your file
 *          share have been uploaded to Amazon S3.</p>
 *
 *          <p>AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all
 *          files written to your file share up to that point in time have been uploaded to Amazon S3.
 *          These files include files written to the file share up to the time that you make a request
 *          for notification. When the upload is done, Storage Gateway sends you notification through
 *          an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification
 *          through event targets such as Amazon SNS or AWS Lambda function. This operation is only
 *          supported for file gateways.</p>
 *
 *
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification">Getting file upload notification</a> in the <i>AWS Storage Gateway User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, NotifyWhenUploadedCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, NotifyWhenUploadedCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new NotifyWhenUploadedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyWhenUploadedCommandInput} for command's `input` shape.
 * @see {@link NotifyWhenUploadedCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class NotifyWhenUploadedCommand extends $Command<NotifyWhenUploadedCommandInput, NotifyWhenUploadedCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: NotifyWhenUploadedCommandInput;
    constructor(input: NotifyWhenUploadedCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<NotifyWhenUploadedCommandInput, NotifyWhenUploadedCommandOutput>;
    private serialize;
    private deserialize;
}
