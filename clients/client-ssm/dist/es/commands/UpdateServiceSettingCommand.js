import { __extends } from "tslib";
import { UpdateServiceSettingRequest, UpdateServiceSettingResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateServiceSettingCommand, serializeAws_json1_1UpdateServiceSettingCommand, } from "../protocols/Aws_json1_1";
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
 *    current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the
 *    original value defined by the AWS service team.</p>
 *          <p>Update the service setting for the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateServiceSettingCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateServiceSettingCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateServiceSettingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceSettingCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSettingCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServiceSettingCommand = /** @class */ (function (_super) {
    __extends(UpdateServiceSettingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServiceSettingCommand(input) {
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
    UpdateServiceSettingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateServiceSettingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServiceSettingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateServiceSettingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServiceSettingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateServiceSettingCommand(input, context);
    };
    UpdateServiceSettingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateServiceSettingCommand(output, context);
    };
    return UpdateServiceSettingCommand;
}($Command));
export { UpdateServiceSettingCommand };
//# sourceMappingURL=UpdateServiceSettingCommand.js.map