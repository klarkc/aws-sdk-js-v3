import { __extends } from "tslib";
import { DeleteNetworkAclRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteNetworkAclCommand, serializeAws_ec2DeleteNetworkAclCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified network ACL. You can't delete the ACL if it's associated with any subnets. You can't delete the default network ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkAclCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkAclCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkAclCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkAclCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNetworkAclCommand = /** @class */ (function (_super) {
    __extends(DeleteNetworkAclCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNetworkAclCommand(input) {
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
    DeleteNetworkAclCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteNetworkAclCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNetworkAclRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNetworkAclCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteNetworkAclCommand(input, context);
    };
    DeleteNetworkAclCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteNetworkAclCommand(output, context);
    };
    return DeleteNetworkAclCommand;
}($Command));
export { DeleteNetworkAclCommand };
//# sourceMappingURL=DeleteNetworkAclCommand.js.map