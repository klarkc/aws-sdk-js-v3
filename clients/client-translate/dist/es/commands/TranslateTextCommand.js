import { __extends } from "tslib";
import { TranslateTextRequest, TranslateTextResponse } from "../models/models_0";
import { deserializeAws_json1_1TranslateTextCommand, serializeAws_json1_1TranslateTextCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Translates input text from the source language to the target language. For a list of
 *       available languages and language codes, see <a>what-is-languages</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new TranslateTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TranslateTextCommandInput} for command's `input` shape.
 * @see {@link TranslateTextCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TranslateTextCommand = /** @class */ (function (_super) {
    __extends(TranslateTextCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TranslateTextCommand(input) {
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
    TranslateTextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranslateClient";
        var commandName = "TranslateTextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TranslateTextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TranslateTextResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TranslateTextCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TranslateTextCommand(input, context);
    };
    TranslateTextCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TranslateTextCommand(output, context);
    };
    return TranslateTextCommand;
}($Command));
export { TranslateTextCommand };
//# sourceMappingURL=TranslateTextCommand.js.map