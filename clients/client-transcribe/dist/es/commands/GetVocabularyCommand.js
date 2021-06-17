import { __extends } from "tslib";
import { GetVocabularyRequest, GetVocabularyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetVocabularyCommand, serializeAws_json1_1GetVocabularyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a vocabulary. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVocabularyCommandInput} for command's `input` shape.
 * @see {@link GetVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVocabularyCommand = /** @class */ (function (_super) {
    __extends(GetVocabularyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetVocabularyCommand(input) {
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
    GetVocabularyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "GetVocabularyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetVocabularyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetVocabularyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetVocabularyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetVocabularyCommand(input, context);
    };
    GetVocabularyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetVocabularyCommand(output, context);
    };
    return GetVocabularyCommand;
}($Command));
export { GetVocabularyCommand };
//# sourceMappingURL=GetVocabularyCommand.js.map