import { __extends } from "tslib";
import { StartSpeechSynthesisTaskInput, StartSpeechSynthesisTaskOutput } from "../models/models_0";
import { deserializeAws_restJson1StartSpeechSynthesisTaskCommand, serializeAws_restJson1StartSpeechSynthesisTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the creation of an asynchronous synthesis task, by starting a new
 *         <code>SpeechSynthesisTask</code>. This operation requires all the standard information
 *       needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the
 *       output of the synthesis task and two optional parameters (OutputS3KeyPrefix and SnsTopicArn).
 *       Once the synthesis task is created, this operation will return a SpeechSynthesisTask object,
 *       which will include an identifier of this task as well as the current status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, StartSpeechSynthesisTaskCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, StartSpeechSynthesisTaskCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new StartSpeechSynthesisTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSpeechSynthesisTaskCommandInput} for command's `input` shape.
 * @see {@link StartSpeechSynthesisTaskCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartSpeechSynthesisTaskCommand = /** @class */ (function (_super) {
    __extends(StartSpeechSynthesisTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartSpeechSynthesisTaskCommand(input) {
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
    StartSpeechSynthesisTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PollyClient";
        var commandName = "StartSpeechSynthesisTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartSpeechSynthesisTaskInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartSpeechSynthesisTaskOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartSpeechSynthesisTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartSpeechSynthesisTaskCommand(input, context);
    };
    StartSpeechSynthesisTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartSpeechSynthesisTaskCommand(output, context);
    };
    return StartSpeechSynthesisTaskCommand;
}($Command));
export { StartSpeechSynthesisTaskCommand };
//# sourceMappingURL=StartSpeechSynthesisTaskCommand.js.map