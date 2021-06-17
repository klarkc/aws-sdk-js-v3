import { __extends } from "tslib";
import { DeleteVpcRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteVpcCommand, serializeAws_ec2DeleteVpcCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. For example, you must terminate all instances running in the VPC, delete all security groups associated with the VPC (except the default one), delete all route tables associated with the VPC (except the default one), and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVpcCommand = /** @class */ (function (_super) {
    __extends(DeleteVpcCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVpcCommand(input) {
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
    DeleteVpcCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteVpcCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVpcCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteVpcCommand(input, context);
    };
    DeleteVpcCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteVpcCommand(output, context);
    };
    return DeleteVpcCommand;
}($Command));
export { DeleteVpcCommand };
//# sourceMappingURL=DeleteVpcCommand.js.map