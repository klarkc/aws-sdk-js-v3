import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcEndpointConnectionNotificationRequest, ModifyVpcEndpointConnectionNotificationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyVpcEndpointConnectionNotificationCommandInput extends ModifyVpcEndpointConnectionNotificationRequest {
}
export interface ModifyVpcEndpointConnectionNotificationCommandOutput extends ModifyVpcEndpointConnectionNotificationResult, __MetadataBearer {
}
/**
 * <p>Modifies a connection notification for VPC endpoint or VPC endpoint service. You
 *             can change the SNS topic for the notification, or the events for which to be notified. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointConnectionNotificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointConnectionNotificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointConnectionNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcEndpointConnectionNotificationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointConnectionNotificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyVpcEndpointConnectionNotificationCommand extends $Command<ModifyVpcEndpointConnectionNotificationCommandInput, ModifyVpcEndpointConnectionNotificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcEndpointConnectionNotificationCommandInput;
    constructor(input: ModifyVpcEndpointConnectionNotificationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcEndpointConnectionNotificationCommandInput, ModifyVpcEndpointConnectionNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
