import { __extends } from "tslib";
import { DeleteIntentRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteIntentCommand, serializeAws_restJson1DeleteIntentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all versions of the intent, including the
 *         <code>$LATEST</code> version. To delete a specific version of the
 *       intent, use the <a>DeleteIntentVersion</a> operation.</p>
 *          <p> You can delete a version of an intent only if it is not
 *       referenced. To delete an intent that is referred to in one or more bots
 *       (see <a>how-it-works</a>), you must remove those references
 *       first. </p>
 *          <note>
 *             <p> If you get the <code>ResourceInUseException</code> exception, it
 *         provides an example reference that shows where the intent is referenced.
 *         To remove the reference to the intent, either update the bot or delete
 *         it. If you get the same exception when you attempt to delete the intent
 *         again, repeat until the intent has no references and the call to
 *           <code>DeleteIntent</code> is successful. </p>
 *          </note>
 *
 *          <p> This operation requires permission for the
 *         <code>lex:DeleteIntent</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntentCommandInput} for command's `input` shape.
 * @see {@link DeleteIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIntentCommand = /** @class */ (function (_super) {
    __extends(DeleteIntentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIntentCommand(input) {
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
    DeleteIntentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "DeleteIntentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIntentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIntentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteIntentCommand(input, context);
    };
    DeleteIntentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteIntentCommand(output, context);
    };
    return DeleteIntentCommand;
}($Command));
export { DeleteIntentCommand };
//# sourceMappingURL=DeleteIntentCommand.js.map