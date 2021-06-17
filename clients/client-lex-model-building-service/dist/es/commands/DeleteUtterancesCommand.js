import { __extends } from "tslib";
import { DeleteUtterancesRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteUtterancesCommand, serializeAws_restJson1DeleteUtterancesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes stored utterances.</p>
 *          <p>Amazon Lex stores the utterances that users send to your bot. Utterances
 *       are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the
 *       ability of your bot to respond to user input.</p>
 *          <p>Use the <code>DeleteUtterances</code> operation to manually delete
 *       stored utterances for a specific user. When you use the
 *         <code>DeleteUtterances</code> operation, utterances stored for improving
 *       your bot's ability to respond to user input are deleted immediately.
 *       Utterances stored for use with the <code>GetUtterancesView</code>
 *       operation are deleted after 15 days.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteUtterances</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteUtterancesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteUtterancesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteUtterancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUtterancesCommandInput} for command's `input` shape.
 * @see {@link DeleteUtterancesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUtterancesCommand = /** @class */ (function (_super) {
    __extends(DeleteUtterancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUtterancesCommand(input) {
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
    DeleteUtterancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "DeleteUtterancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUtterancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUtterancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteUtterancesCommand(input, context);
    };
    DeleteUtterancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteUtterancesCommand(output, context);
    };
    return DeleteUtterancesCommand;
}($Command));
export { DeleteUtterancesCommand };
//# sourceMappingURL=DeleteUtterancesCommand.js.map