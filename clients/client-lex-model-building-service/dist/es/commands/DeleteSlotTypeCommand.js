import { __extends } from "tslib";
import { DeleteSlotTypeRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteSlotTypeCommand, serializeAws_restJson1DeleteSlotTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all versions of the slot type, including the
 *         <code>$LATEST</code> version. To delete a specific version of the slot
 *       type, use the <a>DeleteSlotTypeVersion</a> operation.</p>
 *          <p> You can delete a version of a slot type only if it is not
 *       referenced. To delete a slot type that is referred to in one or more
 *       intents, you must remove those references first. </p>
 *          <note>
 *             <p> If you get the <code>ResourceInUseException</code> exception,
 *         the exception provides an example reference that shows the intent where
 *         the slot type is referenced. To remove the reference to the slot type,
 *         either update the intent or delete it. If you get the same exception
 *         when you attempt to delete the slot type again, repeat until the slot
 *         type has no references and the <code>DeleteSlotType</code> call is
 *         successful. </p>
 *          </note>
 *          <p>This operation requires permission for the
 *         <code>lex:DeleteSlotType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlotTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSlotTypeCommand = /** @class */ (function (_super) {
    __extends(DeleteSlotTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSlotTypeCommand(input) {
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
    DeleteSlotTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "DeleteSlotTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSlotTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSlotTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSlotTypeCommand(input, context);
    };
    DeleteSlotTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSlotTypeCommand(output, context);
    };
    return DeleteSlotTypeCommand;
}($Command));
export { DeleteSlotTypeCommand };
//# sourceMappingURL=DeleteSlotTypeCommand.js.map