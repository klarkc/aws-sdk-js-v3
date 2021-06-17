import { __extends } from "tslib";
import { DeleteSlotTypeVersionRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteSlotTypeVersionCommand, serializeAws_restJson1DeleteSlotTypeVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specific version of a slot type. To delete all versions
 *       of a slot type, use the <a>DeleteSlotType</a> operation. </p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteSlotTypeVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteSlotTypeVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteSlotTypeVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteSlotTypeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlotTypeVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotTypeVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSlotTypeVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteSlotTypeVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSlotTypeVersionCommand(input) {
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
    DeleteSlotTypeVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "DeleteSlotTypeVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSlotTypeVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSlotTypeVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSlotTypeVersionCommand(input, context);
    };
    DeleteSlotTypeVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSlotTypeVersionCommand(output, context);
    };
    return DeleteSlotTypeVersionCommand;
}($Command));
export { DeleteSlotTypeVersionCommand };
//# sourceMappingURL=DeleteSlotTypeVersionCommand.js.map