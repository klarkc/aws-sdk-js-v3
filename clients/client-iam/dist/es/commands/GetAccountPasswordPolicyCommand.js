import { __extends } from "tslib";
import { GetAccountPasswordPolicyResponse } from "../models/models_0";
import { deserializeAws_queryGetAccountPasswordPolicyCommand, serializeAws_queryGetAccountPasswordPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the password policy for the AWS account. This tells you the complexity
 *             requirements and mandatory rotation periods for the IAM user passwords in your account.
 *             For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
 *                 policy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccountPasswordPolicyCommand = /** @class */ (function (_super) {
    __extends(GetAccountPasswordPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccountPasswordPolicyCommand(input) {
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
    GetAccountPasswordPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetAccountPasswordPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: GetAccountPasswordPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccountPasswordPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetAccountPasswordPolicyCommand(input, context);
    };
    GetAccountPasswordPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetAccountPasswordPolicyCommand(output, context);
    };
    return GetAccountPasswordPolicyCommand;
}($Command));
export { GetAccountPasswordPolicyCommand };
//# sourceMappingURL=GetAccountPasswordPolicyCommand.js.map