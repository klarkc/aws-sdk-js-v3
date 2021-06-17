import { __extends } from "tslib";
import { DeleteFlowTemplateRequest, DeleteFlowTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteFlowTemplateCommand, serializeAws_json1_1DeleteFlowTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy.
 *          Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeleteFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeleteFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeleteFlowTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFlowTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteFlowTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFlowTemplateCommand(input) {
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
    DeleteFlowTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "DeleteFlowTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFlowTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFlowTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFlowTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFlowTemplateCommand(input, context);
    };
    DeleteFlowTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFlowTemplateCommand(output, context);
    };
    return DeleteFlowTemplateCommand;
}($Command));
export { DeleteFlowTemplateCommand };
//# sourceMappingURL=DeleteFlowTemplateCommand.js.map