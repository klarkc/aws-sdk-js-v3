import { __extends } from "tslib";
import { DeleteThingTypeRequest, DeleteThingTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteThingTypeCommand, serializeAws_restJson1DeleteThingTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified thing type. You cannot delete a thing type if it has things
 * 			associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and
 * 			finally use <a>DeleteThingType</a> to delete the thing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteThingTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThingTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteThingTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteThingTypeCommand = /** @class */ (function (_super) {
    __extends(DeleteThingTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteThingTypeCommand(input) {
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
    DeleteThingTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteThingTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteThingTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteThingTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteThingTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteThingTypeCommand(input, context);
    };
    DeleteThingTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteThingTypeCommand(output, context);
    };
    return DeleteThingTypeCommand;
}($Command));
export { DeleteThingTypeCommand };
//# sourceMappingURL=DeleteThingTypeCommand.js.map