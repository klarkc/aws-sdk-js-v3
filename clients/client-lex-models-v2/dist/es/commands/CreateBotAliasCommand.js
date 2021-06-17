import { __extends } from "tslib";
import { CreateBotAliasRequest, CreateBotAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateBotAliasCommand, serializeAws_restJson1CreateBotAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an alias for the specified version of a bot. Use an alias to
 *          enable you to change the version of a bot without updating applications
 *          that use the bot.</p>
 *          <p>For example, you can create an alias called "PROD" that your
 *          applications use to call the Amazon Lex bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotAliasCommandInput} for command's `input` shape.
 * @see {@link CreateBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBotAliasCommand = /** @class */ (function (_super) {
    __extends(CreateBotAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBotAliasCommand(input) {
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
    CreateBotAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateBotAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBotAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBotAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBotAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateBotAliasCommand(input, context);
    };
    CreateBotAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateBotAliasCommand(output, context);
    };
    return CreateBotAliasCommand;
}($Command));
export { CreateBotAliasCommand };
//# sourceMappingURL=CreateBotAliasCommand.js.map