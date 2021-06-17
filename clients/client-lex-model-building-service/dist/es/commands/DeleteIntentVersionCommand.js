import { __extends } from "tslib";
import { DeleteIntentVersionRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteIntentVersionCommand, serializeAws_restJson1DeleteIntentVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specific version of an intent. To delete all versions of
 *       a intent, use the <a>DeleteIntent</a> operation. </p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteIntentVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteIntentVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteIntentVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteIntentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntentVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteIntentVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIntentVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteIntentVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIntentVersionCommand(input) {
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
    DeleteIntentVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "DeleteIntentVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIntentVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIntentVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteIntentVersionCommand(input, context);
    };
    DeleteIntentVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteIntentVersionCommand(output, context);
    };
    return DeleteIntentVersionCommand;
}($Command));
export { DeleteIntentVersionCommand };
//# sourceMappingURL=DeleteIntentVersionCommand.js.map