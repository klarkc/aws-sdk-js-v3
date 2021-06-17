import { __extends } from "tslib";
import { ResetServiceSettingRequest, ResetServiceSettingResult } from "../models/models_1";
import { deserializeAws_json1_1ResetServiceSettingCommand, serializeAws_json1_1ResetServiceSettingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
 *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
 *    AWS service charges money to the account based on feature or service usage, then the AWS service
 *    team might create a default setting of "false". This means the user can't use this feature unless
 *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
 *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
 *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
 *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
 *    permission for the setting. Use the <a>GetServiceSetting</a> API action to view the
 *    current value. Use the <a>UpdateServiceSetting</a> API action to change the default
 *    setting. </p>
 *          <p>Reset the service setting for the account to the default value as provisioned by the AWS
 *    service team. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ResetServiceSettingCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ResetServiceSettingCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ResetServiceSettingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetServiceSettingCommandInput} for command's `input` shape.
 * @see {@link ResetServiceSettingCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetServiceSettingCommand = /** @class */ (function (_super) {
    __extends(ResetServiceSettingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetServiceSettingCommand(input) {
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
    ResetServiceSettingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ResetServiceSettingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetServiceSettingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetServiceSettingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetServiceSettingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResetServiceSettingCommand(input, context);
    };
    ResetServiceSettingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResetServiceSettingCommand(output, context);
    };
    return ResetServiceSettingCommand;
}($Command));
export { ResetServiceSettingCommand };
//# sourceMappingURL=ResetServiceSettingCommand.js.map