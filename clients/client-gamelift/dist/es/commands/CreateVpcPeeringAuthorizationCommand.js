import { __extends } from "tslib";
import { CreateVpcPeeringAuthorizationInput, CreateVpcPeeringAuthorizationOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand, serializeAws_json1_1CreateVpcPeeringAuthorizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateVpcPeeringAuthorizationCommand = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringAuthorizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpcPeeringAuthorizationCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateVpcPeeringAuthorizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "CreateVpcPeeringAuthorizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpcPeeringAuthorizationInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVpcPeeringAuthorizationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpcPeeringAuthorizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateVpcPeeringAuthorizationCommand(input, context);
    };
    CreateVpcPeeringAuthorizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand(output, context);
    };
    return CreateVpcPeeringAuthorizationCommand;
}($Command));
export { CreateVpcPeeringAuthorizationCommand };
//# sourceMappingURL=CreateVpcPeeringAuthorizationCommand.js.map