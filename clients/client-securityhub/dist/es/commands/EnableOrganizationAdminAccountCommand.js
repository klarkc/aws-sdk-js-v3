import { __extends } from "tslib";
import { EnableOrganizationAdminAccountRequest, EnableOrganizationAdminAccountResponse } from "../models/models_1";
import { deserializeAws_restJson1EnableOrganizationAdminAccountCommand, serializeAws_restJson1EnableOrganizationAdminAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Designates the Security Hub administrator account for an organization. Can only be called by
 *          the organization management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableOrganizationAdminAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableOrganizationAdminAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new EnableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableOrganizationAdminAccountCommand = /** @class */ (function (_super) {
    __extends(EnableOrganizationAdminAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableOrganizationAdminAccountCommand(input) {
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
    EnableOrganizationAdminAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "EnableOrganizationAdminAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableOrganizationAdminAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableOrganizationAdminAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableOrganizationAdminAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1EnableOrganizationAdminAccountCommand(input, context);
    };
    EnableOrganizationAdminAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1EnableOrganizationAdminAccountCommand(output, context);
    };
    return EnableOrganizationAdminAccountCommand;
}($Command));
export { EnableOrganizationAdminAccountCommand };
//# sourceMappingURL=EnableOrganizationAdminAccountCommand.js.map