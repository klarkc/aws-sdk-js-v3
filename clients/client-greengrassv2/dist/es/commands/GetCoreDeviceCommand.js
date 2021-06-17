import { __extends } from "tslib";
import { GetCoreDeviceRequest, GetCoreDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCoreDeviceCommand, serializeAws_restJson1GetCoreDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves metadata for a AWS IoT Greengrass core device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new GetCoreDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link GetCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCoreDeviceCommand = /** @class */ (function (_super) {
    __extends(GetCoreDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCoreDeviceCommand(input) {
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
    GetCoreDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "GetCoreDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCoreDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCoreDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCoreDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCoreDeviceCommand(input, context);
    };
    GetCoreDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCoreDeviceCommand(output, context);
    };
    return GetCoreDeviceCommand;
}($Command));
export { GetCoreDeviceCommand };
//# sourceMappingURL=GetCoreDeviceCommand.js.map