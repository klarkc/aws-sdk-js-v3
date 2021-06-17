import { __extends } from "tslib";
import { DisableOrganizationAdminAccountRequest, DisableOrganizationAdminAccountResponse } from "../models/models_1";
import { deserializeAws_restJson1DisableOrganizationAdminAccountCommand, serializeAws_restJson1DisableOrganizationAdminAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables a Security Hub administrator account. Can only be called by the organization
 *          management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableOrganizationAdminAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableOrganizationAdminAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "SecurityHubClient";
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