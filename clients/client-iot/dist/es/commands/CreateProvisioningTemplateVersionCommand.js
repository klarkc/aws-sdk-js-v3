import { __extends } from "tslib";
import { CreateProvisioningTemplateVersionRequest, CreateProvisioningTemplateVersionResponse, } from "../models/models_0";
import { deserializeAws_restJson1CreateProvisioningTemplateVersionCommand, serializeAws_restJson1CreateProvisioningTemplateVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of a fleet provisioning template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProvisioningTemplateVersionCommand = /** @class */ (function (_super) {
    __extends(CreateProvisioningTemplateVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProvisioningTemplateVersionCommand(input) {
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
    CreateProvisioningTemplateVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateProvisioningTemplateVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProvisioningTemplateVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProvisioningTemplateVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProvisioningTemplateVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateProvisioningTemplateVersionCommand(input, context);
    };
    CreateProvisioningTemplateVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateProvisioningTemplateVersionCommand(output, context);
    };
    return CreateProvisioningTemplateVersionCommand;
}($Command));
export { CreateProvisioningTemplateVersionCommand };
//# sourceMappingURL=CreateProvisioningTemplateVersionCommand.js.map