import { __extends } from "tslib";
import { AcceptInputDeviceTransferRequest, AcceptInputDeviceTransferResponse } from "../models/models_1";
import { deserializeAws_restJson1AcceptInputDeviceTransferCommand, serializeAws_restJson1AcceptInputDeviceTransferCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, AcceptInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, AcceptInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new AcceptInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link AcceptInputDeviceTransferCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptInputDeviceTransferCommand = /** @class */ (function (_super) {
    __extends(AcceptInputDeviceTransferCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptInputDeviceTransferCommand(input) {
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
    AcceptInputDeviceTransferCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "AcceptInputDeviceTransferCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptInputDeviceTransferRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptInputDeviceTransferResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptInputDeviceTransferCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AcceptInputDeviceTransferCommand(input, context);
    };
    AcceptInputDeviceTransferCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AcceptInputDeviceTransferCommand(output, context);
    };
    return AcceptInputDeviceTransferCommand;
}($Command));
export { AcceptInputDeviceTransferCommand };
//# sourceMappingURL=AcceptInputDeviceTransferCommand.js.map