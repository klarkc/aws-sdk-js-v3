import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteLocalGatewayRouteTableVpcAssociationRequest, DeleteLocalGatewayRouteTableVpcAssociationResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLocalGatewayRouteTableVpcAssociationCommandInput extends DeleteLocalGatewayRouteTableVpcAssociationRequest {
}
export interface DeleteLocalGatewayRouteTableVpcAssociationCommandOutput extends DeleteLocalGatewayRouteTableVpcAssociationResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified association between a VPC and local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteTableVpcAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteTableVpcAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteLocalGatewayRouteTableVpcAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLocalGatewayRouteTableVpcAssociationCommand extends $Command<DeleteLocalGatewayRouteTableVpcAssociationCommandInput, DeleteLocalGatewayRouteTableVpcAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteLocalGatewayRouteTableVpcAssociationCommandInput;
    constructor(input: DeleteLocalGatewayRouteTableVpcAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLocalGatewayRouteTableVpcAssociationCommandInput, DeleteLocalGatewayRouteTableVpcAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
