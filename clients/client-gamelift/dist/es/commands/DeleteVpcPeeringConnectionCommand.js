import { __extends } from "tslib";
import { DeleteVpcPeeringConnectionInput, DeleteVpcPeeringConnectionOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteVpcPeeringConnectionCommand, serializeAws_json1_1DeleteVpcPeeringConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DeleteVpcPeeringConnectionCommand = /** @class */ (function (_super) {
    __extends(DeleteVpcPeeringConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVpcPeeringConnectionCommand(input) {
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
    DeleteVpcPeeringConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeleteVpcPeeringConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVpcPeeringConnectionInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVpcPeeringConnectionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVpcPeeringConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteVpcPeeringConnectionCommand(input, context);
    };
    DeleteVpcPeeringConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteVpcPeeringConnectionCommand(output, context);
    };
    return DeleteVpcPeeringConnectionCommand;
}($Command));
export { DeleteVpcPeeringConnectionCommand };
//# sourceMappingURL=DeleteVpcPeeringConnectionCommand.js.map