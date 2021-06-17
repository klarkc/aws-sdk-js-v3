import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcEndpointConnectionNotificationRequest, CreateVpcEndpointConnectionNotificationResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVpcEndpointConnectionNotificationCommandInput extends CreateVpcEndpointConnectionNotificationRequest {
}
export interface CreateVpcEndpointConnectionNotificationCommandOutput extends CreateVpcEndpointConnectionNotificationResult, __MetadataBearer {
}
/**
 * <p>Creates a connection notification for a specified VPC endpoint or VPC endpoint
 *             service. A connection notification notifies you of specific endpoint events. You must
 *             create an SNS topic to receive notifications. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Create a Topic</a> in
 *             the <i>Amazon Simple Notification Service Developer Guide</i>.</p>
 *         <p>You can create a connection notification for interface endpoints only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointConnectionNotificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointConnectionNotificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcEndpointConnectionNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcEndpointConnectionNotificationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointConnectionNotificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVpcEndpointConnectionNotificationCommand extends $Command<CreateVpcEndpointConnectionNotificationCommandInput, CreateVpcEndpointConnectionNotificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpcEndpointConnectionNotificationCommandInput;
    constructor(input: CreateVpcEndpointConnectionNotificationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcEndpointConnectionNotificationCommandInput, CreateVpcEndpointConnectionNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
