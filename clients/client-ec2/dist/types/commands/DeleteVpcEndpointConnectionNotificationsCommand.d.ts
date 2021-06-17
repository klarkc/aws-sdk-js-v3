import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpcEndpointConnectionNotificationsRequest, DeleteVpcEndpointConnectionNotificationsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVpcEndpointConnectionNotificationsCommandInput extends DeleteVpcEndpointConnectionNotificationsRequest {
}
export interface DeleteVpcEndpointConnectionNotificationsCommandOutput extends DeleteVpcEndpointConnectionNotificationsResult, __MetadataBearer {
}
/**
 * <p>Deletes one or more VPC endpoint connection notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointConnectionNotificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointConnectionNotificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcEndpointConnectionNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointConnectionNotificationsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointConnectionNotificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVpcEndpointConnectionNotificationsCommand extends $Command<DeleteVpcEndpointConnectionNotificationsCommandInput, DeleteVpcEndpointConnectionNotificationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpcEndpointConnectionNotificationsCommandInput;
    constructor(input: DeleteVpcEndpointConnectionNotificationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcEndpointConnectionNotificationsCommandInput, DeleteVpcEndpointConnectionNotificationsCommandOutput>;
    private serialize;
    private deserialize;
}
