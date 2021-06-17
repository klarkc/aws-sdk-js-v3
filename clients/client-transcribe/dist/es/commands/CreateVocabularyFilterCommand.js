import { __extends } from "tslib";
import { CreateVocabularyFilterRequest, CreateVocabularyFilterResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateVocabularyFilterCommand, serializeAws_json1_1CreateVocabularyFilterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new vocabulary filter that you can use to filter words, such as profane
 *             words, from the output of a transcription job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new CreateVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link CreateVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVocabularyFilterCommand = /** @class */ (function (_super) {
    __extends(CreateVocabularyFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVocabularyFilterCommand(input) {
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
    CreateVocabularyFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "CreateVocabularyFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVocabularyFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVocabularyFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVocabularyFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateVocabularyFilterCommand(input, context);
    };
    CreateVocabularyFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateVocabularyFilterCommand(output, context);
    };
    return CreateVocabularyFilterCommand;
}($Command));
export { CreateVocabularyFilterCommand };
//# sourceMappingURL=CreateVocabularyFilterCommand.js.map