import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteVpcPeeringAuthorizationInput, DeleteVpcPeeringAuthorizationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVpcPeeringAuthorizationCommandInput extends DeleteVpcPeeringAuthorizationInput {
}
export interface DeleteVpcPeeringAuthorizationCommandOutput extends DeleteVpcPeeringAuthorizationOutput, __MetadataBearer {
}
/**
 * <p>Cancels a pending VPC peering authorization for the specified VPC. If you need to
 *             delete an existing VPC peering connection, call <a>DeleteVpcPeeringConnection</a>. </p>
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
 * import { GameLiftClient, DeleteVpcPeeringAuthorizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteVpcPeeringAuthorizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteVpcPeeringAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcPeeringAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcPeeringAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVpcPeeringAuthorizationCommand extends $Command<DeleteVpcPeeringAuthorizationCommandInput, DeleteVpcPeeringAuthorizationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteVpcPeeringAuthorizationCommandInput;
    constructor(input: DeleteVpcPeeringAuthorizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpcPeeringAuthorizationCommandInput, DeleteVpcPeeringAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
