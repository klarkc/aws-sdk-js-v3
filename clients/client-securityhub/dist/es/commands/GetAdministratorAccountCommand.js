import { __extends } from "tslib";
import { GetAdministratorAccountRequest, GetAdministratorAccountResponse } from "../models/models_1";
import { deserializeAws_restJson1GetAdministratorAccountCommand, serializeAws_restJson1GetAdministratorAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides the details for the Security Hub administrator account for the current member account.</p>
 *          <p>Can be used by both member accounts that are managed using Organizations and accounts that were
 *          invited manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetAdministratorAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetAdministratorAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAdministratorAccountCommand = /** @class */ (function (_super) {
    __extends(GetAdministratorAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAdministratorAccountCommand(input) {
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
    GetAdministratorAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "GetAdministratorAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAdministratorAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAdministratorAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAdministratorAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAdministratorAccountCommand(input, context);
    };
    GetAdministratorAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAdministratorAccountCommand(output, context);
    };
    return GetAdministratorAccountCommand;
}($Command));
export { GetAdministratorAccountCommand };
//# sourceMappingURL=GetAdministratorAccountCommand.js.map