import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptVpcEndpointConnectionsRequest, AcceptVpcEndpointConnectionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptVpcEndpointConnectionsCommandInput extends AcceptVpcEndpointConnectionsRequest {
}
export interface AcceptVpcEndpointConnectionsCommandOutput extends AcceptVpcEndpointConnectionsResult, __MetadataBearer {
}
/**
 * <p>Accepts one or more interface VPC endpoint connection requests to your VPC endpoint
 *             service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link AcceptVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptVpcEndpointConnectionsCommand extends $Command<AcceptVpcEndpointConnectionsCommandInput, AcceptVpcEndpointConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AcceptVpcEndpointConnectionsCommandInput;
    constructor(input: AcceptVpcEndpointConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptVpcEndpointConnectionsCommandInput, AcceptVpcEndpointConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
