import { __extends } from "tslib";
import { PhoneNumberValidateRequest, PhoneNumberValidateResponse } from "../models/models_1";
import { deserializeAws_restJson1PhoneNumberValidateCommand, serializeAws_restJson1PhoneNumberValidateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PhoneNumberValidateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PhoneNumberValidateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new PhoneNumberValidateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PhoneNumberValidateCommandInput} for command's `input` shape.
 * @see {@link PhoneNumberValidateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PhoneNumberValidateCommand = /** @class */ (function (_super) {
    __extends(PhoneNumberValidateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PhoneNumberValidateCommand(input) {
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
    PhoneNumberValidateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "PhoneNumberValidateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PhoneNumberValidateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PhoneNumberValidateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PhoneNumberValidateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PhoneNumberValidateCommand(input, context);
    };
    PhoneNumberValidateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PhoneNumberValidateCommand(output, context);
    };
    return PhoneNumberValidateCommand;
}($Command));
export { PhoneNumberValidateCommand };
//# sourceMappingURL=PhoneNumberValidateCommand.js.map