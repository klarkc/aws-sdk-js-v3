import { __extends } from "tslib";
import { StopContactRecordingRequest, StopContactRecordingResponse } from "../models/models_0";
import { deserializeAws_restJson1StopContactRecordingCommand, serializeAws_restJson1StopContactRecordingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time
 *    action. If you use StopContactRecording to stop recording an ongoing call, you can't use
 *    StartContactRecording to restart it. For scenarios where the recording has started and you want
 *    to suspend it for sensitive information (for example, to collect a credit card number), and then
 *    restart it, use SuspendContactRecording and ResumeContactRecording.</p>
 *
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StopContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopContactRecordingCommandInput} for command's `input` shape.
 * @see {@link StopContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopContactRecordingCommand = /** @class */ (function (_super) {
    __extends(StopContactRecordingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopContactRecordingCommand(input) {
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
    StopContactRecordingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "StopContactRecordingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopContactRecordingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopContactRecordingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopContactRecordingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopContactRecordingCommand(input, context);
    };
    StopContactRecordingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopContactRecordingCommand(output, context);
    };
    return StopContactRecordingCommand;
}($Command));
export { StopContactRecordingCommand };
//# sourceMappingURL=StopContactRecordingCommand.js.map