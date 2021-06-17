import { __extends } from "tslib";
import { UpdateSystemTemplateRequest, UpdateSystemTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateSystemTemplateCommand, serializeAws_json1_1UpdateSystemTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UpdateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UpdateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new UpdateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSystemTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateSystemTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSystemTemplateCommand(input) {
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
    UpdateSystemTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "UpdateSystemTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSystemTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSystemTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSystemTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateSystemTemplateCommand(input, context);
    };
    UpdateSystemTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateSystemTemplateCommand(output, context);
    };
    return UpdateSystemTemplateCommand;
}($Command));
export { UpdateSystemTemplateCommand };
//# sourceMappingURL=UpdateSystemTemplateCommand.js.map