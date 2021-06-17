import { __extends } from "tslib";
import { DisassociateElasticIpRequest } from "../models/models_0";
import { deserializeAws_json1_1DisassociateElasticIpCommand, serializeAws_json1_1DisassociateElasticIpCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an Elastic IP address from its instance. The address remains registered with
 *       the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DisassociateElasticIpCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DisassociateElasticIpCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DisassociateElasticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateElasticIpCommandInput} for command's `input` shape.
 * @see {@link DisassociateElasticIpCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateElasticIpCommand = /** @class */ (function (_super) {
    __extends(DisassociateElasticIpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateElasticIpCommand(input) {
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
    DisassociateElasticIpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DisassociateElasticIpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateElasticIpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateElasticIpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateElasticIpCommand(input, context);
    };
    DisassociateElasticIpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateElasticIpCommand(output, context);
    };
    return DisassociateElasticIpCommand;
}($Command));
export { DisassociateElasticIpCommand };
//# sourceMappingURL=DisassociateElasticIpCommand.js.map