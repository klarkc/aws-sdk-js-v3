import { __extends } from "tslib";
import { TransferInputDeviceRequest, TransferInputDeviceResponse } from "../models/models_1";
import { deserializeAws_restJson1TransferInputDeviceCommand, serializeAws_restJson1TransferInputDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, TransferInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, TransferInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new TransferInputDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferInputDeviceCommandInput} for command's `input` shape.
 * @see {@link TransferInputDeviceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TransferInputDeviceCommand = /** @class */ (function (_super) {
    __extends(TransferInputDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TransferInputDeviceCommand(input) {
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
    TransferInputDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "TransferInputDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TransferInputDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TransferInputDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TransferInputDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TransferInputDeviceCommand(input, context);
    };
    TransferInputDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TransferInputDeviceCommand(output, context);
    };
    return TransferInputDeviceCommand;
}($Command));
export { TransferInputDeviceCommand };
//# sourceMappingURL=TransferInputDeviceCommand.js.map