import { __extends } from "tslib";
import { CreateServiceProfileRequest, CreateServiceProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateServiceProfileCommand, serializeAws_restJson1CreateServiceProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new service profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateServiceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateServiceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateServiceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateServiceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateServiceProfileCommand = /** @class */ (function (_super) {
    __extends(CreateServiceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateServiceProfileCommand(input) {
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
    CreateServiceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "CreateServiceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateServiceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateServiceProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateServiceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateServiceProfileCommand(input, context);
    };
    CreateServiceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateServiceProfileCommand(output, context);
    };
    return CreateServiceProfileCommand;
}($Command));
export { CreateServiceProfileCommand };
//# sourceMappingURL=CreateServiceProfileCommand.js.map