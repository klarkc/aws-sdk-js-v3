import { __extends } from "tslib";
import { GetBuiltinIntentsRequest, GetBuiltinIntentsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBuiltinIntentsCommand, serializeAws_restJson1GetBuiltinIntentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of built-in intents that meet the specified
 *       criteria.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltinIntents</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinIntentsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBuiltinIntentsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBuiltinIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBuiltinIntentsCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBuiltinIntentsCommand = /** @class */ (function (_super) {
    __extends(GetBuiltinIntentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBuiltinIntentsCommand(input) {
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
    GetBuiltinIntentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetBuiltinIntentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBuiltinIntentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBuiltinIntentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBuiltinIntentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBuiltinIntentsCommand(input, context);
    };
    GetBuiltinIntentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBuiltinIntentsCommand(output, context);
    };
    return GetBuiltinIntentsCommand;
}($Command));
export { GetBuiltinIntentsCommand };
//# sourceMappingURL=GetBuiltinIntentsCommand.js.map