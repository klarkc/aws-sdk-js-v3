import { __extends } from "tslib";
import { UpdateLoginProfileRequest } from "../models/models_1";
import { deserializeAws_queryUpdateLoginProfileCommand, serializeAws_queryUpdateLoginProfileCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the password for the specified IAM user. You can use the AWS CLI, the
 *             AWS API, or the <b>Users</b> page in the IAM console to
 *             change the password for any IAM user. Use <a>ChangePassword</a> to change
 *             your own password in the <b>My Security Credentials</b> page
 *             in the AWS Management Console.</p>
 *         <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLoginProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLoginProfileCommand = /** @class */ (function (_super) {
    __extends(UpdateLoginProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLoginProfileCommand(input) {
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
    UpdateLoginProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateLoginProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLoginProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLoginProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateLoginProfileCommand(input, context);
    };
    UpdateLoginProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateLoginProfileCommand(output, context);
    };
    return UpdateLoginProfileCommand;
}($Command));
export { UpdateLoginProfileCommand };
//# sourceMappingURL=UpdateLoginProfileCommand.js.map