import { __extends } from "tslib";
import { StartMedicalTranscriptionJobRequest, StartMedicalTranscriptionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartMedicalTranscriptionJobCommand, serializeAws_json1_1StartMedicalTranscriptionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a batch job to transcribe medical speech to text.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartMedicalTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartMedicalTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new StartMedicalTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMedicalTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link StartMedicalTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMedicalTranscriptionJobCommand = /** @class */ (function (_super) {
    __extends(StartMedicalTranscriptionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMedicalTranscriptionJobCommand(input) {
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
    StartMedicalTranscriptionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "StartMedicalTranscriptionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMedicalTranscriptionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartMedicalTranscriptionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMedicalTranscriptionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartMedicalTranscriptionJobCommand(input, context);
    };
    StartMedicalTranscriptionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartMedicalTranscriptionJobCommand(output, context);
    };
    return StartMedicalTranscriptionJobCommand;
}($Command));
export { StartMedicalTranscriptionJobCommand };
//# sourceMappingURL=StartMedicalTranscriptionJobCommand.js.map