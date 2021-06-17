import { __extends } from "tslib";
import { BatchDetectDominantLanguageRequest, BatchDetectDominantLanguageResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchDetectDominantLanguageCommand, serializeAws_json1_1BatchDetectDominantLanguageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Determines the dominant language of the input text for a batch of documents. For a list
 *       of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectDominantLanguageCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectDominantLanguageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectDominantLanguageCommandInput} for command's `input` shape.
 * @see {@link BatchDetectDominantLanguageCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDetectDominantLanguageCommand = /** @class */ (function (_super) {
    __extends(BatchDetectDominantLanguageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDetectDominantLanguageCommand(input) {
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
    BatchDetectDominantLanguageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "BatchDetectDominantLanguageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDetectDominantLanguageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDetectDominantLanguageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDetectDominantLanguageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchDetectDominantLanguageCommand(input, context);
    };
    BatchDetectDominantLanguageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchDetectDominantLanguageCommand(output, context);
    };
    return BatchDetectDominantLanguageCommand;
}($Command));
export { BatchDetectDominantLanguageCommand };
//# sourceMappingURL=BatchDetectDominantLanguageCommand.js.map