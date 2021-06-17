import { __extends } from "tslib";
import { GetBuiltinIntentRequest, GetBuiltinIntentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBuiltinIntentCommand, serializeAws_restJson1GetBuiltinIntentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a built-in intent.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltinIntent</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBuiltinIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBuiltinIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBuiltinIntentCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBuiltinIntentCommand = /** @class */ (function (_super) {
    __extends(GetBuiltinIntentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBuiltinIntentCommand(input) {
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
    GetBuiltinIntentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetBuiltinIntentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBuiltinIntentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBuiltinIntentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBuiltinIntentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBuiltinIntentCommand(input, context);
    };
    GetBuiltinIntentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBuiltinIntentCommand(output, context);
    };
    return GetBuiltinIntentCommand;
}($Command));
export { GetBuiltinIntentCommand };
//# sourceMappingURL=GetBuiltinIntentCommand.js.map