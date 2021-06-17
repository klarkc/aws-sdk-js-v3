import { __extends } from "tslib";
import { DescribeInputDeviceRequest, DescribeInputDeviceResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeInputDeviceCommand, serializeAws_restJson1DescribeInputDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Gets the details for the input device
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeInputDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInputDeviceCommand = /** @class */ (function (_super) {
    __extends(DescribeInputDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInputDeviceCommand(input) {
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
    DescribeInputDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DescribeInputDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInputDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInputDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInputDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeInputDeviceCommand(input, context);
    };
    DescribeInputDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeInputDeviceCommand(output, context);
    };
    return DescribeInputDeviceCommand;
}($Command));
export { DescribeInputDeviceCommand };
//# sourceMappingURL=DescribeInputDeviceCommand.js.map