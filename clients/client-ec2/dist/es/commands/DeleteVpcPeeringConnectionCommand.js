import { __extends } from "tslib";
import { DeleteVpcPeeringConnectionRequest, DeleteVpcPeeringConnectionResult } from "../models/models_2";
import { deserializeAws_ec2DeleteVpcPeeringConnectionCommand, serializeAws_ec2DeleteVpcPeeringConnectionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a VPC peering connection. Either the owner of the requester VPC or the owner
 *             of the accepter VPC can delete the VPC peering connection if it's in the
 *                 <code>active</code> state. The owner of the requester VPC can delete a VPC peering
 *             connection in the <code>pending-acceptance</code> state. You cannot delete a VPC peering
 *             connection that's in the <code>failed</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "EC2Client";
        var commandName = "DeleteVpcPeeringConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVpcPeeringConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVpcPeeringConnectionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVpcPeeringConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteVpcPeeringConnectionCommand(input, context);
    };
    DeleteVpcPeeringConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteVpcPeeringConnectionCommand(output, context);
    };
    return DeleteVpcPeeringConnectionCommand;
}($Command));
export { DeleteVpcPeeringConnectionCommand };
//# sourceMappingURL=DeleteVpcPeeringConnectionCommand.js.map