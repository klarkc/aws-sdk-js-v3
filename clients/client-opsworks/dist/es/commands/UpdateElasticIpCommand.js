import { __extends } from "tslib";
import { UpdateElasticIpRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateElasticIpCommand, serializeAws_json1_1UpdateElasticIpCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateElasticIpCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateElasticIpCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UpdateElasticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateElasticIpCommandInput} for command's `input` shape.
 * @see {@link UpdateElasticIpCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateElasticIpCommand = /** @class */ (function (_super) {
    __extends(UpdateElasticIpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateElasticIpCommand(input) {
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
    UpdateElasticIpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "UpdateElasticIpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateElasticIpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateElasticIpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateElasticIpCommand(input, context);
    };
    UpdateElasticIpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateElasticIpCommand(output, context);
    };
    return UpdateElasticIpCommand;
}($Command));
export { UpdateElasticIpCommand };
//# sourceMappingURL=UpdateElasticIpCommand.js.map