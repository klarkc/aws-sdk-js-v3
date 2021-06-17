import { __extends } from "tslib";
import { ListMedicalVocabulariesRequest, ListMedicalVocabulariesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListMedicalVocabulariesCommand, serializeAws_json1_1ListMedicalVocabulariesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of vocabularies that match the specified criteria. If you don't enter a
 *             value in any of the request parameters, returns the entire list of vocabularies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListMedicalVocabulariesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListMedicalVocabulariesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListMedicalVocabulariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMedicalVocabulariesCommandInput} for command's `input` shape.
 * @see {@link ListMedicalVocabulariesCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMedicalVocabulariesCommand = /** @class */ (function (_super) {
    __extends(ListMedicalVocabulariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMedicalVocabulariesCommand(input) {
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
    ListMedicalVocabulariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "ListMedicalVocabulariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMedicalVocabulariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMedicalVocabulariesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMedicalVocabulariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMedicalVocabulariesCommand(input, context);
    };
    ListMedicalVocabulariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMedicalVocabulariesCommand(output, context);
    };
    return ListMedicalVocabulariesCommand;
}($Command));
export { ListMedicalVocabulariesCommand };
//# sourceMappingURL=ListMedicalVocabulariesCommand.js.map