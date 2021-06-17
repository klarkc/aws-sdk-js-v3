import { __extends } from "tslib";
import { UpdateFlowTemplateRequest, UpdateFlowTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateFlowTemplateCommand, serializeAws_json1_1UpdateFlowTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this
 *          behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UpdateFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UpdateFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new UpdateFlowTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFlowTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateFlowTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFlowTemplateCommand(input) {
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
    UpdateFlowTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "UpdateFlowTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFlowTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFlowTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFlowTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateFlowTemplateCommand(input, context);
    };
    UpdateFlowTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateFlowTemplateCommand(output, context);
    };
    return UpdateFlowTemplateCommand;
}($Command));
export { UpdateFlowTemplateCommand };
//# sourceMappingURL=UpdateFlowTemplateCommand.js.map