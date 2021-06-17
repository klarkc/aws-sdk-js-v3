import { __extends } from "tslib";
import { ChangePasswordRequest } from "../models/models_0";
import { deserializeAws_queryChangePasswordCommand, serializeAws_queryChangePasswordCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the password of the IAM user who is calling this operation. This operation
 *             can be performed using the AWS CLI, the AWS API, or the <b>My
 *                 Security Credentials</b> page in the AWS Management Console. The AWS account root user
 *             password is not affected by this operation.</p>
 *         <p>Use <a>UpdateLoginProfile</a> to use the AWS CLI, the AWS API, or the
 *                 <b>Users</b> page in the IAM console to change the
 *             password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing
 *                 passwords</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ChangePasswordCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ChangePasswordCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ChangePasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangePasswordCommandInput} for command's `input` shape.
 * @see {@link ChangePasswordCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ChangePasswordCommand = /** @class */ (function (_super) {
    __extends(ChangePasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ChangePasswordCommand(input) {
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
    ChangePasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ChangePasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ChangePasswordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ChangePasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryChangePasswordCommand(input, context);
    };
    ChangePasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryChangePasswordCommand(output, context);
    };
    return ChangePasswordCommand;
}($Command));
export { ChangePasswordCommand };
//# sourceMappingURL=ChangePasswordCommand.js.map