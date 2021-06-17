import { __extends } from "tslib";
import { GetIntentRequest, GetIntentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetIntentCommand, serializeAws_restJson1GetIntentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns information about an intent. In addition to the intent
 *       name, you must specify the intent version. </p>
 *          <p> This operation requires permissions to perform the
 *         <code>lex:GetIntent</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntentCommandInput} for command's `input` shape.
 * @see {@link GetIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIntentCommand = /** @class */ (function (_super) {
    __extends(GetIntentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIntentCommand(input) {
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
    GetIntentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetIntentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIntentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetIntentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIntentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIntentCommand(input, context);
    };
    GetIntentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIntentCommand(output, context);
    };
    return GetIntentCommand;
}($Command));
export { GetIntentCommand };
//# sourceMappingURL=GetIntentCommand.js.map