import { __extends } from "tslib";
import { StartContactRecordingRequest, StartContactRecordingResponse } from "../models/models_0";
import { deserializeAws_restJson1StartContactRecordingCommand, serializeAws_restJson1StartContactRecordingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts recording the contact when the agent joins the call. StartContactRecording is a
 *    one-time action. For example, if you use StopContactRecording to stop recording an ongoing call,
 *    you can't use StartContactRecording to restart it. For scenarios where the recording has started
 *    and you want to suspend and resume it, such as when collecting sensitive information (for
 *    example, a credit card number), use SuspendContactRecording and ResumeContactRecording.</p>
 *          <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording
 *     behavior</a> block.</p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StartContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartContactRecordingCommandInput} for command's `input` shape.
 * @see {@link StartContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartContactRecordingCommand = /** @class */ (function (_super) {
    __extends(StartContactRecordingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartContactRecordingCommand(input) {
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
    StartContactRecordingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "StartContactRecordingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartContactRecordingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartContactRecordingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartContactRecordingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartContactRecordingCommand(input, context);
    };
    StartContactRecordingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartContactRecordingCommand(output, context);
    };
    return StartContactRecordingCommand;
}($Command));
export { StartContactRecordingCommand };
//# sourceMappingURL=StartContactRecordingCommand.js.map