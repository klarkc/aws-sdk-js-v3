import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DeleteNotificationChannelRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNotificationChannelCommandInput extends DeleteNotificationChannelRequest {
}
export interface DeleteNotificationChannelCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple
 *       Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DeleteNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNotificationChannelCommand extends $Command<DeleteNotificationChannelCommandInput, DeleteNotificationChannelCommandOutput, FMSClientResolvedConfig> {
    readonly input: DeleteNotificationChannelCommandInput;
    constructor(input: DeleteNotificationChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNotificationChannelCommandInput, DeleteNotificationChannelCommandOutput>;
    private serialize;
    private deserialize;
}
