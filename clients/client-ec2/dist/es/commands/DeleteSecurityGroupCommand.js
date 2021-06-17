import { __extends } from "tslib";
import { DeleteSecurityGroupRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteSecurityGroupCommand, serializeAws_ec2DeleteSecurityGroupCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a security group.</p>
 *          <p>If you attempt to delete a security group that is associated with an instance, or is
 * 			  referenced by another security group, the operation fails with
 * 				<code>InvalidGroup.InUse</code> in EC2-Classic or
 * 				<code>DependencyViolation</code> in EC2-VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSecurityGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSecurityGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSecurityGroupCommand(input) {
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
    DeleteSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSecurityGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteSecurityGroupCommand(input, context);
    };
    DeleteSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteSecurityGroupCommand(output, context);
    };
    return DeleteSecurityGroupCommand;
}($Command));
export { DeleteSecurityGroupCommand };
//# sourceMappingURL=DeleteSecurityGroupCommand.js.map