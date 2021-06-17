import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeVpcPeeringAuthorizationsInput, DescribeVpcPeeringAuthorizationsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVpcPeeringAuthorizationsCommandInput extends DescribeVpcPeeringAuthorizationsInput {
}
export interface DescribeVpcPeeringAuthorizationsCommandOutput extends DescribeVpcPeeringAuthorizationsOutput, __MetadataBearer {
}
/**
 * <p>Retrieves valid VPC peering authorizations that are pending for the AWS account.
 *             This operation returns all VPC peering authorizations and requests for peering. This
 *             includes those initiated and received by this account. </p>
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
 * import { GameLiftClient, DescribeVpcPeeringAuthorizationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeVpcPeeringAuthorizationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeVpcPeeringAuthorizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcPeeringAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcPeeringAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVpcPeeringAuthorizationsCommand extends $Command<DescribeVpcPeeringAuthorizationsCommandInput, DescribeVpcPeeringAuthorizationsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeVpcPeeringAuthorizationsCommandInput;
    constructor(input: DescribeVpcPeeringAuthorizationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcPeeringAuthorizationsCommandInput, DescribeVpcPeeringAuthorizationsCommandOutput>;
    private serialize;
    private deserialize;
}
