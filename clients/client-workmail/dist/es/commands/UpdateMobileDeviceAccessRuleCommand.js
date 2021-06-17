import { __extends } from "tslib";
import { UpdateMobileDeviceAccessRuleRequest, UpdateMobileDeviceAccessRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommand, serializeAws_json1_1UpdateMobileDeviceAccessRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a mobile device access rule for the specified Amazon WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdateMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMobileDeviceAccessRuleCommand = /** @class */ (function (_super) {
    __extends(UpdateMobileDeviceAccessRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMobileDeviceAccessRuleCommand(input) {
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
    UpdateMobileDeviceAccessRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "UpdateMobileDeviceAccessRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMobileDeviceAccessRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMobileDeviceAccessRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMobileDeviceAccessRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMobileDeviceAccessRuleCommand(input, context);
    };
    UpdateMobileDeviceAccessRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommand(output, context);
    };
    return UpdateMobileDeviceAccessRuleCommand;
}($Command));
export { UpdateMobileDeviceAccessRuleCommand };
//# sourceMappingURL=UpdateMobileDeviceAccessRuleCommand.js.map