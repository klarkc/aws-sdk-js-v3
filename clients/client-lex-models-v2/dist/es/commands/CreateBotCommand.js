import { __extends } from "tslib";
import { CreateBotRequest, CreateBotResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateBotCommand, serializeAws_restJson1CreateBotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Lex conversational bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotCommandInput} for command's `input` shape.
 * @see {@link CreateBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBotCommand = /** @class */ (function (_super) {
    __extends(CreateBotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBotCommand(input) {
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
    CreateBotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateBotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateBotCommand(input, context);
    };
    CreateBotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateBotCommand(output, context);
    };
    return CreateBotCommand;
}($Command));
export { CreateBotCommand };
//# sourceMappingURL=CreateBotCommand.js.map