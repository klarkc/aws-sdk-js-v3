import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLocalGatewayRouteTableVpcAssociationRequest, CreateLocalGatewayRouteTableVpcAssociationResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLocalGatewayRouteTableVpcAssociationCommandInput extends CreateLocalGatewayRouteTableVpcAssociationRequest {
}
export interface CreateLocalGatewayRouteTableVpcAssociationCommandOutput extends CreateLocalGatewayRouteTableVpcAssociationResult, __MetadataBearer {
}
/**
 * <p>Associates the specified VPC with the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLocalGatewayRouteTableVpcAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLocalGatewayRouteTableVpcAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLocalGatewayRouteTableVpcAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLocalGatewayRouteTableVpcAssociationCommand extends $Command<CreateLocalGatewayRouteTableVpcAssociationCommandInput, CreateLocalGatewayRouteTableVpcAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateLocalGatewayRouteTableVpcAssociationCommandInput;
    constructor(input: CreateLocalGatewayRouteTableVpcAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocalGatewayRouteTableVpcAssociationCommandInput, CreateLocalGatewayRouteTableVpcAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
