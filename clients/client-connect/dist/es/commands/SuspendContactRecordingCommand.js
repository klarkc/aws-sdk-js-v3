import { __extends } from "tslib";
import { SuspendContactRecordingRequest, SuspendContactRecordingResponse } from "../models/models_0";
import { deserializeAws_restJson1SuspendContactRecordingCommand, serializeAws_restJson1SuspendContactRecordingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>When a contact is being recorded, this API suspends recording the call. For example, you
 *    might suspend the call recording while collecting sensitive information, such as a credit card
 *    number. Then use ResumeContactRecording to restart recording. </p>
 *          <p>The period of time that the recording is suspended is filled with silence in the final
 *    recording. </p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SuspendContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SuspendContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new SuspendContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SuspendContactRecordingCommandInput} for command's `input` shape.
 * @see {@link SuspendContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SuspendContactRecordingCommand = /** @class */ (function (_super) {
    __extends(SuspendContactRecordingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SuspendContactRecordingCommand(input) {
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
    SuspendContactRecordingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "SuspendContactRecordingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SuspendContactRecordingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SuspendContactRecordingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SuspendContactRecordingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SuspendContactRecordingCommand(input, context);
    };
    SuspendContactRecordingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SuspendContactRecordingCommand(output, context);
    };
    return SuspendContactRecordingCommand;
}($Command));
export { SuspendContactRecordingCommand };
//# sourceMappingURL=SuspendContactRecordingCommand.js.map