import { __extends } from "tslib";
import { AssignInstanceRequest } from "../models/models_0";
import { deserializeAws_json1_1AssignInstanceCommand, serializeAws_json1_1AssignInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assign a registered instance to a layer.</p>
 *          <ul>
 *             <li>
 *                <p>You can assign registered on-premises instances to any layer type.</p>
 *             </li>
 *             <li>
 *                <p>You can assign registered Amazon EC2 instances only to custom layers.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management
 *       (IAM) user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, AssignInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, AssignInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new AssignInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignInstanceCommandInput} for command's `input` shape.
 * @see {@link AssignInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssignInstanceCommand = /** @class */ (function (_super) {
    __extends(AssignInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssignInstanceCommand(input) {
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
    AssignInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "AssignInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssignInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssignInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssignInstanceCommand(input, context);
    };
    AssignInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssignInstanceCommand(output, context);
    };
    return AssignInstanceCommand;
}($Command));
export { AssignInstanceCommand };
//# sourceMappingURL=AssignInstanceCommand.js.map