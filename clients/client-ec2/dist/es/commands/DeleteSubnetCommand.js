import { __extends } from "tslib";
import { DeleteSubnetRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteSubnetCommand, serializeAws_ec2DeleteSubnetCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteSubnetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubnetCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSubnetCommand = /** @class */ (function (_super) {
    __extends(DeleteSubnetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSubnetCommand(input) {
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
    DeleteSubnetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteSubnetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSubnetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSubnetCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteSubnetCommand(input, context);
    };
    DeleteSubnetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteSubnetCommand(output, context);
    };
    return DeleteSubnetCommand;
}($Command));
export { DeleteSubnetCommand };
//# sourceMappingURL=DeleteSubnetCommand.js.map