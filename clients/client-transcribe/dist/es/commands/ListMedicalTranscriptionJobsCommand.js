import { __extends } from "tslib";
import { ListMedicalTranscriptionJobsRequest, ListMedicalTranscriptionJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListMedicalTranscriptionJobsCommand, serializeAws_json1_1ListMedicalTranscriptionJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists medical transcription jobs with a specified status or substring that matches
 *             their names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListMedicalTranscriptionJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListMedicalTranscriptionJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListMedicalTranscriptionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMedicalTranscriptionJobsCommandInput} for command's `input` shape.
 * @see {@link ListMedicalTranscriptionJobsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMedicalTranscriptionJobsCommand = /** @class */ (function (_super) {
    __extends(ListMedicalTranscriptionJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMedicalTranscriptionJobsCommand(input) {
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
    ListMedicalTranscriptionJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "ListMedicalTranscriptionJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMedicalTranscriptionJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMedicalTranscriptionJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMedicalTranscriptionJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMedicalTranscriptionJobsCommand(input, context);
    };
    ListMedicalTranscriptionJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMedicalTranscriptionJobsCommand(output, context);
    };
    return ListMedicalTranscriptionJobsCommand;
}($Command));
export { ListMedicalTranscriptionJobsCommand };
//# sourceMappingURL=ListMedicalTranscriptionJobsCommand.js.map