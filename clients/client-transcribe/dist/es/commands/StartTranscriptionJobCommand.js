import { __extends } from "tslib";
import { StartTranscriptionJobRequest, StartTranscriptionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartTranscriptionJobCommand, serializeAws_json1_1StartTranscriptionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an asynchronous job to transcribe speech to text.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new StartTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link StartTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartTranscriptionJobCommand = /** @class */ (function (_super) {
    __extends(StartTranscriptionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartTranscriptionJobCommand(input) {
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
    StartTranscriptionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "StartTranscriptionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartTranscriptionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartTranscriptionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartTranscriptionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartTranscriptionJobCommand(input, context);
    };
    StartTranscriptionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartTranscriptionJobCommand(output, context);
    };
    return StartTranscriptionJobCommand;
}($Command));
export { StartTranscriptionJobCommand };
//# sourceMappingURL=StartTranscriptionJobCommand.js.map