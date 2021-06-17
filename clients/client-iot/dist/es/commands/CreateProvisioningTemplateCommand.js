import { __extends } from "tslib";
import { CreateProvisioningTemplateRequest, CreateProvisioningTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateProvisioningTemplateCommand, serializeAws_restJson1CreateProvisioningTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a fleet provisioning template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProvisioningTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProvisioningTemplateCommand(input) {
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
    CreateProvisioningTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateProvisioningTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProvisioningTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProvisioningTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProvisioningTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateProvisioningTemplateCommand(input, context);
    };
    CreateProvisioningTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateProvisioningTemplateCommand(output, context);
    };
    return CreateProvisioningTemplateCommand;
}($Command));
export { CreateProvisioningTemplateCommand };
//# sourceMappingURL=CreateProvisioningTemplateCommand.js.map