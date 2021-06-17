import { __extends } from "tslib";
import { RecognizeUtteranceRequest, RecognizeUtteranceResponse } from "../models/models_0";
import { deserializeAws_restJson1RecognizeUtteranceCommand, serializeAws_restJson1RecognizeUtteranceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends user input to Amazon Lex. You can send text or speech. Clients use
 *          this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex
 *          interprets the user input using the machine learning model built for
 *          the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeUtteranceCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeUtteranceCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new RecognizeUtteranceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecognizeUtteranceCommandInput} for command's `input` shape.
 * @see {@link RecognizeUtteranceCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RecognizeUtteranceCommand = /** @class */ (function (_super) {
    __extends(RecognizeUtteranceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RecognizeUtteranceCommand(input) {
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
    RecognizeUtteranceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeV2Client";
        var commandName = "RecognizeUtteranceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RecognizeUtteranceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RecognizeUtteranceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RecognizeUtteranceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RecognizeUtteranceCommand(input, context);
    };
    RecognizeUtteranceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RecognizeUtteranceCommand(output, context);
    };
    return RecognizeUtteranceCommand;
}($Command));
export { RecognizeUtteranceCommand };
//# sourceMappingURL=RecognizeUtteranceCommand.js.map