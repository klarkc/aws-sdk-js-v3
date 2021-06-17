import { __extends } from "tslib";
import { ListVocabularyFiltersRequest, ListVocabularyFiltersResponse } from "../models/models_0";
import { deserializeAws_json1_1ListVocabularyFiltersCommand, serializeAws_json1_1ListVocabularyFiltersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about vocabulary filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListVocabularyFiltersCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListVocabularyFiltersCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListVocabularyFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVocabularyFiltersCommandInput} for command's `input` shape.
 * @see {@link ListVocabularyFiltersCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVocabularyFiltersCommand = /** @class */ (function (_super) {
    __extends(ListVocabularyFiltersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVocabularyFiltersCommand(input) {
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
    ListVocabularyFiltersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "ListVocabularyFiltersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVocabularyFiltersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListVocabularyFiltersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVocabularyFiltersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListVocabularyFiltersCommand(input, context);
    };
    ListVocabularyFiltersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListVocabularyFiltersCommand(output, context);
    };
    return ListVocabularyFiltersCommand;
}($Command));
export { ListVocabularyFiltersCommand };
//# sourceMappingURL=ListVocabularyFiltersCommand.js.map