import { __extends } from "tslib";
import { PutSessionRequest, PutSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1PutSessionCommand, serializeAws_restJson1PutSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new session or modifies an existing session with an Amazon Lex
 *          bot. Use this operation to enable your application to set the state of
 *          the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, PutSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, PutSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new PutSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSessionCommandInput} for command's `input` shape.
 * @see {@link PutSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutSessionCommand = /** @class */ (function (_super) {
    __extends(PutSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutSessionCommand(input) {
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
    PutSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeV2Client";
        var commandName = "PutSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutSessionCommand(input, context);
    };
    PutSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutSessionCommand(output, context);
    };
    return PutSessionCommand;
}($Command));
export { PutSessionCommand };
//# sourceMappingURL=PutSessionCommand.js.map