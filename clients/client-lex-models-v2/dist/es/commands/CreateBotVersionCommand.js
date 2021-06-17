import { __extends } from "tslib";
import { CreateBotVersionRequest, CreateBotVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateBotVersionCommand, serializeAws_restJson1CreateBotVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of the bot based on the <code>DRAFT</code>
 *          version. If the <code>DRAFT</code> version of this resource hasn't
 *          changed since you created the last version, Amazon Lex doesn't create a new
 *          version, it returns the last created version.</p>
 *          <p>When you create the first version of a bot, Amazon Lex sets the version
 *          to 1. Subsequent versions increment by 1.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBotVersionCommand = /** @class */ (function (_super) {
    __extends(CreateBotVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBotVersionCommand(input) {
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
    CreateBotVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateBotVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBotVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBotVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBotVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateBotVersionCommand(input, context);
    };
    CreateBotVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateBotVersionCommand(output, context);
    };
    return CreateBotVersionCommand;
}($Command));
export { CreateBotVersionCommand };
//# sourceMappingURL=CreateBotVersionCommand.js.map