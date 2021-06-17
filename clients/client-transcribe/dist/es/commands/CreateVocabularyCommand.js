import { __extends } from "tslib";
import { CreateVocabularyRequest, CreateVocabularyResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateVocabularyCommand, serializeAws_json1_1CreateVocabularyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles
 *             transcription of an audio file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new CreateVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVocabularyCommandInput} for command's `input` shape.
 * @see {@link CreateVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVocabularyCommand = /** @class */ (function (_super) {
    __extends(CreateVocabularyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVocabularyCommand(input) {
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
    CreateVocabularyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "CreateVocabularyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVocabularyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVocabularyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVocabularyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateVocabularyCommand(input, context);
    };
    CreateVocabularyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateVocabularyCommand(output, context);
    };
    return CreateVocabularyCommand;
}($Command));
export { CreateVocabularyCommand };
//# sourceMappingURL=CreateVocabularyCommand.js.map