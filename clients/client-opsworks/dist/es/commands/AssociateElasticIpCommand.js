import { __extends } from "tslib";
import { AssociateElasticIpRequest } from "../models/models_0";
import { deserializeAws_json1_1AssociateElasticIpCommand, serializeAws_json1_1AssociateElasticIpCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The
 *       address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource
 *         Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, AssociateElasticIpCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, AssociateElasticIpCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new AssociateElasticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateElasticIpCommandInput} for command's `input` shape.
 * @see {@link AssociateElasticIpCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateElasticIpCommand = /** @class */ (function (_super) {
    __extends(AssociateElasticIpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateElasticIpCommand(input) {
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
    AssociateElasticIpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "AssociateElasticIpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateElasticIpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateElasticIpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateElasticIpCommand(input, context);
    };
    AssociateElasticIpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateElasticIpCommand(output, context);
    };
    return AssociateElasticIpCommand;
}($Command));
export { AssociateElasticIpCommand };
//# sourceMappingURL=AssociateElasticIpCommand.js.map