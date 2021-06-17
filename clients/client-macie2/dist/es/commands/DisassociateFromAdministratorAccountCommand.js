import { __extends } from "tslib";
import { DisassociateFromAdministratorAccountRequest, DisassociateFromAdministratorAccountResponse, } from "../models/models_0";
import { deserializeAws_restJson1DisassociateFromAdministratorAccountCommand, serializeAws_restJson1DisassociateFromAdministratorAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a member account from its Amazon Macie administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisassociateFromAdministratorAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisassociateFromAdministratorAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DisassociateFromAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFromAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "Macie2Client";
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