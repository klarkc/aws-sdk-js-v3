import { __extends } from "tslib";
import { DeleteSystemInstanceRequest, DeleteSystemInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteSystemInstanceCommand, serializeAws_json1_1DeleteSystemInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a system instance.
 *          Only system instances that have never been deployed, or that have been undeployed can be deleted.</p>
 *          <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeleteSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeleteSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeleteSystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSystemInstanceCommand = /** @class */ (function (_super) {
    __extends(DeleteSystemInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSystemInstanceCommand(input) {
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
    DeleteSystemInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "DeleteSystemInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSystemInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSystemInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSystemInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteSystemInstanceCommand(input, context);
    };
    DeleteSystemInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteSystemInstanceCommand(output, context);
    };
    return DeleteSystemInstanceCommand;
}($Command));
export { DeleteSystemInstanceCommand };
//# sourceMappingURL=DeleteSystemInstanceCommand.js.map