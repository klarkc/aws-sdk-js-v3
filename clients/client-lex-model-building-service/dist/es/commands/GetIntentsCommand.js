import { __extends } from "tslib";
import { GetIntentsRequest, GetIntentsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetIntentsCommand, serializeAws_restJson1GetIntentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns intent information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you specify the <code>nameContains</code> field, returns the
 *             <code>$LATEST</code> version of all intents that contain the
 *           specified string.</p>
 *             </li>
 *             <li>
 *                <p> If you don't specify the <code>nameContains</code> field,
 *           returns information about the <code>$LATEST</code> version of all
 *           intents. </p>
 *             </li>
 *          </ul>
 *          <p> The operation requires permission for the
 *         <code>lex:GetIntents</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetIntentsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetIntentsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntentsCommandInput} for command's `input` shape.
 * @see {@link GetIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIntentsCommand = /** @class */ (function (_super) {
    __extends(GetIntentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIntentsCommand(input) {
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
    GetIntentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetIntentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIntentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetIntentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIntentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIntentsCommand(input, context);
    };
    GetIntentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIntentsCommand(output, context);
    };
    return GetIntentsCommand;
}($Command));
export { GetIntentsCommand };
//# sourceMappingURL=GetIntentsCommand.js.map