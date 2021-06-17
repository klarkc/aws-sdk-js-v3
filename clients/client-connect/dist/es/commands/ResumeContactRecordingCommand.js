import { __extends } from "tslib";
import { ResumeContactRecordingRequest, ResumeContactRecordingResponse } from "../models/models_0";
import { deserializeAws_restJson1ResumeContactRecordingCommand, serializeAws_restJson1ResumeContactRecordingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>When a contact is being recorded, and the recording has been suspended using
 *    SuspendContactRecording, this API resumes recording the call.</p>
 *
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ResumeContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ResumeContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ResumeContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeContactRecordingCommandInput} for command's `input` shape.
 * @see {@link ResumeContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResumeContactRecordingCommand = /** @class */ (function (_super) {
    __extends(ResumeContactRecordingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResumeContactRecordingCommand(input) {
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
    ResumeContactRecordingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ResumeContactRecordingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResumeContactRecordingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResumeContactRecordingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResumeContactRecordingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ResumeContactRecordingCommand(input, context);
    };
    ResumeContactRecordingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ResumeContactRecordingCommand(output, context);
    };
    return ResumeContactRecordingCommand;
}($Command));
export { ResumeContactRecordingCommand };
//# sourceMappingURL=ResumeContactRecordingCommand.js.map