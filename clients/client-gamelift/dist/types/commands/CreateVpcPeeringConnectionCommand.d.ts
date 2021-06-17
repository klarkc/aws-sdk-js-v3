import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateVpcPeeringConnectionInput, CreateVpcPeeringConnectionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVpcPeeringConnectionCommandInput extends CreateVpcPeeringConnectionInput {
}
export interface CreateVpcPeeringConnectionCommandOutput extends CreateVpcPeeringConnectionOutput, __MetadataBearer {
}
/**
 * <p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an AWS account with the VPC
 *             for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to
 *             communicate directly with other AWS resources. You can peer with VPCs in any AWS account
 *             that you have access to, including the account that you use to manage your Amazon GameLift
 *             fleets. You cannot peer with VPCs that are in different Regions. For more information,
 *             see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
 *         <p>Before calling this operation to establish the peering connection, you first need
 *             to call <a>CreateVpcPeeringAuthorization</a> and identify the VPC you want to
 *             peer with. Once the authorization for the specified VPC is issued, you have 24 hours to
 *             establish the connection. These two operations handle all tasks necessary to peer the
 *             two VPCs, including acceptance, updating routing tables, etc. </p>
 *         <p>To establish the connection, call this operation from the AWS account that is used
 *             to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet
 *             you want to be enable a VPC peering connection for; (2) The AWS account with the VPC
 *             that you want to peer with; and (3) The ID of the VPC you want to peer with. This
 *             operation is asynchronous. If successful, a <a>VpcPeeringConnection</a>
 *             request is created. You can use continuous polling to track the request's status using
 *                 <a>DescribeVpcPeeringConnections</a>, or by monitoring fleet events for
 *             success or failure using <a>DescribeFleetEvents</a>. </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateVpcPeeringAuthorization</a> |
 *                     <a>DescribeVpcPeeringAuthorizations</a> |
 *                     <a>DeleteVpcPeeringAuthorization</a> |
 *                     <a>CreateVpcPeeringConnection</a> |
 *                     <a>DescribeVpcPeeringConnections</a> |
 *                     <a>DeleteVpcPeeringConnection</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateVpcPeeringConnectionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateVpcPeeringConnectionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVpcPeeringConnectionCommand extends $Command<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateVpcPeeringConnectionCommandInput;
    constructor(input: CreateVpcPeeringConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
