import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeregisterTransitGatewayMulticastGroupMembersRequest, DeregisterTransitGatewayMulticastGroupMembersResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterTransitGatewayMulticastGroupMembersCommandInput extends DeregisterTransitGatewayMulticastGroupMembersRequest {
}
export interface DeregisterTransitGatewayMulticastGroupMembersCommandOutput extends DeregisterTransitGatewayMulticastGroupMembersResult, __MetadataBearer {
}
/**
 * <p>Deregisters the specified members (network interfaces) from the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterTransitGatewayMulticastGroupMembersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterTransitGatewayMulticastGroupMembersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeregisterTransitGatewayMulticastGroupMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterTransitGatewayMulticastGroupMembersCommand extends $Command<DeregisterTransitGatewayMulticastGroupMembersCommandInput, DeregisterTransitGatewayMulticastGroupMembersCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeregisterTransitGatewayMulticastGroupMembersCommandInput;
    constructor(input: DeregisterTransitGatewayMulticastGroupMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTransitGatewayMulticastGroupMembersCommandInput, DeregisterTransitGatewayMulticastGroupMembersCommandOutput>;
    private serialize;
    private deserialize;
}
