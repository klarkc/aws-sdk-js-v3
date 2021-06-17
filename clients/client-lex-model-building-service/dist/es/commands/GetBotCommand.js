import { __extends } from "tslib";
import { GetBotRequest, GetBotResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBotCommand, serializeAws_restJson1GetBotCommand } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata information for a specific bot. You must provide
 *       the bot name and the bot version or alias. </p>
 *          <p> This operation requires permissions for the
 *         <code>lex:GetBot</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotCommandInput} for command's `input` shape.
 * @see {@link GetBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBotCommand = /** @class */ (function (_super) {
    __extends(GetBotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBotCommand(input) {
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
    GetBotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetBotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBotCommand(input, context);
    };
    GetBotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBotCommand(output, context);
    };
    return GetBotCommand;
}($Command));
export { GetBotCommand };
//# sourceMappingURL=GetBotCommand.js.map