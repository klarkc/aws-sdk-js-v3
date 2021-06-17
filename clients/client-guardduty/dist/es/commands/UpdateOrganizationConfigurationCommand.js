import { __extends } from "tslib";
import { UpdateOrganizationConfigurationRequest, UpdateOrganizationConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateOrganizationConfigurationCommand, serializeAws_restJson1UpdateOrganizationConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the delegated administrator account with the values provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateOrganizationConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateOrganizationConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateOrganizationConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateOrganizationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateOrganizationConfigurationCommand(input) {
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
    UpdateOrganizationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "UpdateOrganizationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateOrganizationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateOrganizationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateOrganizationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateOrganizationConfigurationCommand(input, context);
    };
    UpdateOrganizationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateOrganizationConfigurationCommand(output, context);
    };
    return UpdateOrganizationConfigurationCommand;
}($Command));
export { UpdateOrganizationConfigurationCommand };
//# sourceMappingURL=UpdateOrganizationConfigurationCommand.js.map