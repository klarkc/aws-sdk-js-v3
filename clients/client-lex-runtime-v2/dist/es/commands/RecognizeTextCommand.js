import { __extends } from "tslib";
import { RecognizeTextRequest, RecognizeTextResponse } from "../models/models_0";
import { deserializeAws_restJson1RecognizeTextCommand, serializeAws_restJson1RecognizeTextCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends user input to Amazon Lex. Client applications use this API to send
 *          requests to Amazon Lex at runtime. Amazon Lex then interprets the user input
 *          using the machine learning model that it build for the bot.</p>
 *          <p>In response, Amazon Lex returns the next message to convey to the user
 *          and an optional response card to display.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeTextCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new RecognizeTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecognizeTextCommandInput} for command's `input` shape.
 * @see {@link RecognizeTextCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RecognizeTextCommand = /** @class */ (function (_super) {
    __extends(RecognizeTextCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RecognizeTextCommand(input) {
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
    RecognizeTextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeV2Client";
        var commandName = "RecognizeTextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RecognizeTextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RecognizeTextResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RecognizeTextCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RecognizeTextCommand(input, context);
    };
    RecognizeTextCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RecognizeTextCommand(output, context);
    };
    return RecognizeTextCommand;
}($Command));
export { RecognizeTextCommand };
//# sourceMappingURL=RecognizeTextCommand.js.map