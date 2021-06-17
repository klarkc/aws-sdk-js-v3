"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVpcPeeringAuthorizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Requests authorization to create or delete a peer connection between the VPC for
 *             your Amazon GameLift fleet and a virtual private cloud (VPC) in your AWS account. VPC peering enables the game
 *             servers on your fleet to communicate directly with other AWS resources. Once you've
 *             received authorization, call <a>CreateVpcPeeringConnection</a> to establish
 *             the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift
 *                 Fleets</a>.</p>
 *         <p>You can peer with VPCs that are owned by any AWS account you have access to,
 *             including the account that you use to manage your Amazon GameLift fleets. You cannot peer with
 *             VPCs that are in different Regions.</p>
 *         <p>To request authorization to create a connection, call this operation from the AWS
 *             account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to
 *             enable your game servers to retrieve data from a DynamoDB table, use the account that
 *             manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC
 *             that you want to peer with, and (2) the ID of the AWS account that you use to manage
 *             Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p>
 *         <p>To request authorization to delete a connection, call this operation from the AWS
 *             account with the VPC that is peered with your Amazon GameLift fleet. Identify the following
 *             values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the
 *             AWS account that you use to manage Amazon GameLift. </p>
 *         <p>The authorization remains valid for 24 hours unless it is canceled by a call to
 *                 <a>DeleteVpcPeeringAuthorization</a>. You must create or delete the
 *             peering connection while the authorization is valid. </p>
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
 * import { GameLiftClient, CreateVpcPeeringAuthorizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateVpcPeeringAuthorizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateVpcPeeringAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcPeeringAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateVpcPeeringAuthorizationCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GameLiftClient";
        const commandName = "CreateVpcPeeringAuthorizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateVpcPeeringAuthorizationInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateVpcPeeringAuthorizationOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateVpcPeeringAuthorizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand(output, context);
    }
}
exports.CreateVpcPeeringAuthorizationCommand = CreateVpcPeeringAuthorizationCommand;
//# sourceMappingURL=CreateVpcPeeringAuthorizationCommand.js.map