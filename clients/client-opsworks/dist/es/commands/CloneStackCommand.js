import { __extends } from "tslib";
import { CloneStackRequest, CloneStackResult } from "../models/models_0";
import { deserializeAws_json1_1CloneStackCommand, serializeAws_json1_1CloneStackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a
 *         Stack</a>. By default, all parameters are set to the values used by the parent stack.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CloneStackCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CloneStackCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new CloneStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CloneStackCommandInput} for command's `input` shape.
 * @see {@link CloneStackCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CloneStackCommand = /** @class */ (function (_super) {
    __extends(CloneStackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CloneStackCommand(input) {
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
    CloneStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "CloneStackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CloneStackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CloneStackResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CloneStackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CloneStackCommand(input, context);
    };
    CloneStackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CloneStackCommand(output, context);
    };
    return CloneStackCommand;
}($Command));
export { CloneStackCommand };
//# sourceMappingURL=CloneStackCommand.js.map