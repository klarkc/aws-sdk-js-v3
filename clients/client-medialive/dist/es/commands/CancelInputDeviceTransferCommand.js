import { __extends } from "tslib";
import { CancelInputDeviceTransferRequest, CancelInputDeviceTransferResponse } from "../models/models_1";
import { deserializeAws_restJson1CancelInputDeviceTransferCommand, serializeAws_restJson1CancelInputDeviceTransferCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Cancel an input device transfer that you have requested.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CancelInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CancelInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CancelInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link CancelInputDeviceTransferCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelInputDeviceTransferCommand = /** @class */ (function (_super) {
    __extends(CancelInputDeviceTransferCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelInputDeviceTransferCommand(input) {
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
    CancelInputDeviceTransferCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "CancelInputDeviceTransferCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelInputDeviceTransferRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelInputDeviceTransferResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelInputDeviceTransferCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelInputDeviceTransferCommand(input, context);
    };
    CancelInputDeviceTransferCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelInputDeviceTransferCommand(output, context);
    };
    return CancelInputDeviceTransferCommand;
}($Command));
export { CancelInputDeviceTransferCommand };
//# sourceMappingURL=CancelInputDeviceTransferCommand.js.map