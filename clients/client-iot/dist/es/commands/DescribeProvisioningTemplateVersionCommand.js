import { __extends } from "tslib";
import { DescribeProvisioningTemplateVersionRequest, DescribeProvisioningTemplateVersionResponse, } from "../models/models_1";
import { deserializeAws_restJson1DescribeProvisioningTemplateVersionCommand, serializeAws_restJson1DescribeProvisioningTemplateVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a fleet provisioning template version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProvisioningTemplateVersionCommand = /** @class */ (function (_super) {
    __extends(DescribeProvisioningTemplateVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProvisioningTemplateVersionCommand(input) {
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
    DescribeProvisioningTemplateVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeProvisioningTemplateVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProvisioningTemplateVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProvisioningTemplateVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProvisioningTemplateVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeProvisioningTemplateVersionCommand(input, context);
    };
    DescribeProvisioningTemplateVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeProvisioningTemplateVersionCommand(output, context);
    };
    return DescribeProvisioningTemplateVersionCommand;
}($Command));
export { DescribeProvisioningTemplateVersionCommand };
//# sourceMappingURL=DescribeProvisioningTemplateVersionCommand.js.map