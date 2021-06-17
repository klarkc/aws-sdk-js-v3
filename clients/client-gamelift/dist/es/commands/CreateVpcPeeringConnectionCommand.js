import { __extends } from "tslib";
import { CreateVpcPeeringConnectionInput, CreateVpcPeeringConnectionOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateVpcPeeringConnectionCommand, serializeAws_json1_1CreateVpcPeeringConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateVpcPeeringConnectionCommand = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpcPeeringConnectionCommand(input) {
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
    CreateVpcPeeringConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "CreateVpcPeeringConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpcPeeringConnectionInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVpcPeeringConnectionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpcPeeringConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateVpcPeeringConnectionCommand(input, context);
    };
    CreateVpcPeeringConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateVpcPeeringConnectionCommand(output, context);
    };
    return CreateVpcPeeringConnectionCommand;
}($Command));
export { CreateVpcPeeringConnectionCommand };
//# sourceMappingURL=CreateVpcPeeringConnectionCommand.js.map