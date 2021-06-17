import { __extends } from "tslib";
import { GetRegistrationCodeRequest, GetRegistrationCodeResponse } from "../models/models_1";
import { deserializeAws_restJson1GetRegistrationCodeCommand, serializeAws_restJson1GetRegistrationCodeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a registration code used to register a CA certificate with AWS IoT.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetRegistrationCodeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetRegistrationCodeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetRegistrationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistrationCodeCommandInput} for command's `input` shape.
 * @see {@link GetRegistrationCodeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRegistrationCodeCommand = /** @class */ (function (_super) {
    __extends(GetRegistrationCodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRegistrationCodeCommand(input) {
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
    GetRegistrationCodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetRegistrationCodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRegistrationCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRegistrationCodeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRegistrationCodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRegistrationCodeCommand(input, context);
    };
    GetRegistrationCodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRegistrationCodeCommand(output, context);
    };
    return GetRegistrationCodeCommand;
}($Command));
export { GetRegistrationCodeCommand };
//# sourceMappingURL=GetRegistrationCodeCommand.js.map