import { __extends } from "tslib";
import { DisassociateFromAdministratorAccountRequest, DisassociateFromAdministratorAccountResponse, } from "../models/models_1";
import { deserializeAws_restJson1DisassociateFromAdministratorAccountCommand, serializeAws_restJson1DisassociateFromAdministratorAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the current Security Hub member account from the associated administrator
 *          account.</p>
 *          <p>This operation is only used by accounts that are not part of an organization. For
 *          organization accounts, only the administrator account can
 *          disassociate a member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisassociateFromAdministratorAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisassociateFromAdministratorAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisassociateFromAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFromAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateFromAdministratorAccountCommand = /** @class */ (function (_super) {
    __extends(DisassociateFromAdministratorAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateFromAdministratorAccountCommand(input) {
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
    DisassociateFromAdministratorAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DisassociateFromAdministratorAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateFromAdministratorAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateFromAdministratorAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateFromAdministratorAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateFromAdministratorAccountCommand(input, context);
    };
    DisassociateFromAdministratorAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateFromAdministratorAccountCommand(output, context);
    };
    return DisassociateFromAdministratorAccountCommand;
}($Command));
export { DisassociateFromAdministratorAccountCommand };
//# sourceMappingURL=DisassociateFromAdministratorAccountCommand.js.map