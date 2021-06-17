import { __extends } from "tslib";
import { ListVocabulariesRequest, ListVocabulariesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListVocabulariesCommand, serializeAws_json1_1ListVocabulariesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of vocabularies that match the specified criteria. If no criteria are
 *             specified, returns the entire list of vocabularies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListVocabulariesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListVocabulariesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListVocabulariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVocabulariesCommandInput} for command's `input` shape.
 * @see {@link ListVocabulariesCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVocabulariesCommand = /** @class */ (function (_super) {
    __extends(ListVocabulariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVocabulariesCommand(input) {
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
    ListVocabulariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "ListVocabulariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVocabulariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListVocabulariesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVocabulariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListVocabulariesCommand(input, context);
    };
    ListVocabulariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListVocabulariesCommand(output, context);
    };
    return ListVocabulariesCommand;
}($Command));
export { ListVocabulariesCommand };
//# sourceMappingURL=ListVocabulariesCommand.js.map