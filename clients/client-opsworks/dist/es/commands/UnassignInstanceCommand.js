import { __extends } from "tslib";
import { UnassignInstanceRequest } from "../models/models_0";
import { deserializeAws_json1_1UnassignInstanceCommand, serializeAws_json1_1UnassignInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Unassigns a registered instance from all layers that are using the instance.
 *           The instance remains in the stack as an unassigned instance, and can be assigned to
 *           another layer as needed. You cannot use this action with instances that were created
 *           with AWS OpsWorks Stacks.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must
 *           have a Manage permissions level for the stack or an attached policy that explicitly
 *           grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UnassignInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UnassignInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UnassignInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnassignInstanceCommandInput} for command's `input` shape.
 * @see {@link UnassignInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnassignInstanceCommand = /** @class */ (function (_super) {
    __extends(UnassignInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnassignInstanceCommand(input) {
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
    UnassignInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "UnassignInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnassignInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnassignInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UnassignInstanceCommand(input, context);
    };
    UnassignInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UnassignInstanceCommand(output, context);
    };
    return UnassignInstanceCommand;
}($Command));
export { UnassignInstanceCommand };
//# sourceMappingURL=UnassignInstanceCommand.js.map