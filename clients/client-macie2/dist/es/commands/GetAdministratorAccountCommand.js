import { __extends } from "tslib";
import { GetAdministratorAccountRequest, GetAdministratorAccountResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAdministratorAccountCommand, serializeAws_restJson1GetAdministratorAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the Amazon Macie administrator account for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetAdministratorAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetAdministratorAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "Macie2Client";
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