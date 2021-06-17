import { __extends } from "tslib";
import { GetVocabularyFilterRequest, GetVocabularyFilterResponse } from "../models/models_0";
import { deserializeAws_json1_1GetVocabularyFilterCommand, serializeAws_json1_1GetVocabularyFilterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a vocabulary filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link GetVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVocabularyFilterCommand = /** @class */ (function (_super) {
    __extends(GetVocabularyFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetVocabularyFilterCommand(input) {
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
    GetVocabularyFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "GetVocabularyFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetVocabularyFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetVocabularyFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetVocabularyFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetVocabularyFilterCommand(input, context);
    };
    GetVocabularyFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetVocabularyFilterCommand(output, context);
    };
    return GetVocabularyFilterCommand;
}($Command));
export { GetVocabularyFilterCommand };
//# sourceMappingURL=GetVocabularyFilterCommand.js.map