import { __extends } from "tslib";
import { PutBotAliasRequest, PutBotAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1PutBotAliasCommand, serializeAws_restJson1PutBotAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an alias for the specified version of the bot or replaces
 *       an alias for the specified bot. To change the version of the bot that the
 *       alias points to, replace the alias. For more information about aliases,
 *       see <a>versioning-aliases</a>.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:PutBotAlias</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutBotAliasCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutBotAliasCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new PutBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBotAliasCommandInput} for command's `input` shape.
 * @see {@link PutBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutBotAliasCommand = /** @class */ (function (_super) {
    __extends(PutBotAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutBotAliasCommand(input) {
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
    PutBotAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "PutBotAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutBotAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutBotAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutBotAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutBotAliasCommand(input, context);
    };
    PutBotAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutBotAliasCommand(output, context);
    };
    return PutBotAliasCommand;
}($Command));
export { PutBotAliasCommand };
//# sourceMappingURL=PutBotAliasCommand.js.map