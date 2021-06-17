import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutNotificationChannelRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutNotificationChannelCommandInput extends PutNotificationChannelRequest {
}
export interface PutNotificationChannelCommandOutput extends __MetadataBearer {
}
/**
 * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS
 *       Firewall Manager uses to record SNS logs.</p>
 *          <p>To perform this action outside of the console, you must configure the SNS topic to allow the Firewall Manager
 *       role <code>AWSServiceRoleForFMS</code> to publish SNS logs. For more information, see
 *       <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a> in the <i>AWS Firewall Manager Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link PutNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutNotificationChannelCommand extends $Command<PutNotificationChannelCommandInput, PutNotificationChannelCommandOutput, FMSClientResolvedConfig> {
    readonly input: PutNotificationChannelCommandInput;
    constructor(input: PutNotificationChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutNotificationChannelCommandInput, PutNotificationChannelCommandOutput>;
    private serialize;
    private deserialize;
}
