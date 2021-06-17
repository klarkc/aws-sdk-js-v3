import { __extends } from "tslib";
import { UpdateProvisioningTemplateRequest, UpdateProvisioningTemplateResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateProvisioningTemplateCommand, serializeAws_restJson1UpdateProvisioningTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a fleet provisioning template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProvisioningTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateProvisioningTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProvisioningTemplateCommand(input) {
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
    UpdateProvisioningTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateProvisioningTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProvisioningTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProvisioningTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProvisioningTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateProvisioningTemplateCommand(input, context);
    };
    UpdateProvisioningTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateProvisioningTemplateCommand(output, context);
    };
    return UpdateProvisioningTemplateCommand;
}($Command));
export { UpdateProvisioningTemplateCommand };
//# sourceMappingURL=UpdateProvisioningTemplateCommand.js.map