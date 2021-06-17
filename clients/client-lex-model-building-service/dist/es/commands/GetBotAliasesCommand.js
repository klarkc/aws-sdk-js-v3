import { __extends } from "tslib";
import { GetBotAliasesRequest, GetBotAliasesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBotAliasesCommand, serializeAws_restJson1GetBotAliasesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of aliases for a specified Amazon Lex bot.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotAliases</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotAliasesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotAliasesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotAliasesCommandInput} for command's `input` shape.
 * @see {@link GetBotAliasesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBotAliasesCommand = /** @class */ (function (_super) {
    __extends(GetBotAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBotAliasesCommand(input) {
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
    GetBotAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetBotAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBotAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBotAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBotAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBotAliasesCommand(input, context);
    };
    GetBotAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBotAliasesCommand(output, context);
    };
    return GetBotAliasesCommand;
}($Command));
export { GetBotAliasesCommand };
//# sourceMappingURL=GetBotAliasesCommand.js.map