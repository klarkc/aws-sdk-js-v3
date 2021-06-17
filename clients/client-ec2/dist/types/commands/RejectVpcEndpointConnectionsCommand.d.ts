import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectVpcEndpointConnectionsRequest, RejectVpcEndpointConnectionsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectVpcEndpointConnectionsCommandInput extends RejectVpcEndpointConnectionsRequest {
}
export interface RejectVpcEndpointConnectionsCommandOutput extends RejectVpcEndpointConnectionsResult, __MetadataBearer {
}
/**
 * <p>Rejects one or more VPC endpoint connection requests to your VPC endpoint
 *             service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link RejectVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectVpcEndpointConnectionsCommand extends $Command<RejectVpcEndpointConnectionsCommandInput, RejectVpcEndpointConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RejectVpcEndpointConnectionsCommandInput;
    constructor(input: RejectVpcEndpointConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectVpcEndpointConnectionsCommandInput, RejectVpcEndpointConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
