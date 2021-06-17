import { __extends } from "tslib";
import { DeleteSystemTemplateRequest, DeleteSystemTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteSystemTemplateCommand, serializeAws_json1_1DeleteSystemTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a system. New deployments can't contain the system after its deletion.
 *       Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeleteSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeleteSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeleteSystemTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSystemTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteSystemTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSystemTemplateCommand(input) {
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
    DeleteSystemTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "DeleteSystemTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSystemTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSystemTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSystemTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteSystemTemplateCommand(input, context);
    };
    DeleteSystemTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteSystemTemplateCommand(output, context);
    };
    return DeleteSystemTemplateCommand;
}($Command));
export { DeleteSystemTemplateCommand };
//# sourceMappingURL=DeleteSystemTemplateCommand.js.map