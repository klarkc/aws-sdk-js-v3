import { __extends } from "tslib";
import { RejectInputDeviceTransferRequest, RejectInputDeviceTransferResponse } from "../models/models_1";
import { deserializeAws_restJson1RejectInputDeviceTransferCommand, serializeAws_restJson1RejectInputDeviceTransferCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Reject the transfer of the specified input device to your AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, RejectInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, RejectInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new RejectInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link RejectInputDeviceTransferCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectInputDeviceTransferCommand = /** @class */ (function (_super) {
    __extends(RejectInputDeviceTransferCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectInputDeviceTransferCommand(input) {
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
    RejectInputDeviceTransferCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "RejectInputDeviceTransferCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectInputDeviceTransferRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectInputDeviceTransferResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectInputDeviceTransferCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RejectInputDeviceTransferCommand(input, context);
    };
    RejectInputDeviceTransferCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RejectInputDeviceTransferCommand(output, context);
    };
    return RejectInputDeviceTransferCommand;
}($Command));
export { RejectInputDeviceTransferCommand };
//# sourceMappingURL=RejectInputDeviceTransferCommand.js.map