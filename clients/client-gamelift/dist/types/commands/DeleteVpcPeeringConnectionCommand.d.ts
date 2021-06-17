import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteVpcPeeringConnectionInput, DeleteVpcPeeringConnectionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVpcPeeringConnectionCommandInput extends DeleteVpcPeeringConnectionInput {
}
export interface DeleteVpcPeeringConnectionCommandOutput extends DeleteVpcPeeringConnectionOutput, __MetadataBearer {
}
/**
 * <p>Removes a VPC peering connection. To delete the connection, you must have a valid
 *             authorization for the VPC peering connection that you want to delete. You can check for
 *             an authorization by calling <a>DescribeVpcPeeringAuthorizations</a> or
 *             request a new one using <a>CreateVpcPeeringAuthorization</a>. </p>
 *         <p>Once a valid authorization exists, call this operation from the AWS account that is
 *             used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection
 *             ID and fleet ID. If successful, the connection is removed. </p>
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
 * import { GameLiftClient, DeleteVpcPeeringConnectionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteVpcPeeringConnectionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVpcPeeringConnectionCommand extends $Command<DeleteVpcPeeringConnectionCommandInput, DeleteVpcPeeringConnectionCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteVpcPeeringConnectionCommandInput;
    constructor(input: DeleteVpcPeeringConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcPeeringConnectionCommandInput, DeleteVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
