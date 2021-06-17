import { __extends } from "tslib";
import { DisableOrganizationAdminAccountRequest, DisableOrganizationAdminAccountResponse } from "../models/models_0";
import { deserializeAws_restJson1DisableOrganizationAdminAccountCommand, serializeAws_restJson1DisableOrganizationAdminAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables an AWS account within the Organization as the GuardDuty delegated
 *       administrator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DisableOrganizationAdminAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DisableOrganizationAdminAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DisableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableOrganizationAdminAccountCommand = /** @class */ (function (_super) {
    __extends(DisableOrganizationAdminAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableOrganizationAdminAccountCommand(input) {
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
    DisableOrganizationAdminAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DisableOrganizationAdminAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableOrganizationAdminAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableOrganizationAdminAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableOrganizationAdminAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisableOrganizationAdminAccountCommand(input, context);
    };
    DisableOrganizationAdminAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisableOrganizationAdminAccountCommand(output, context);
    };
    return DisableOrganizationAdminAccountCommand;
}($Command));
export { DisableOrganizationAdminAccountCommand };
//# sourceMappingURL=DisableOrganizationAdminAccountCommand.js.map