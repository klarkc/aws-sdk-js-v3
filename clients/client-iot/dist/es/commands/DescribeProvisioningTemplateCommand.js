import { __extends } from "tslib";
import { DescribeProvisioningTemplateRequest, DescribeProvisioningTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeProvisioningTemplateCommand, serializeAws_restJson1DescribeProvisioningTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a fleet provisioning template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProvisioningTemplateCommand = /** @class */ (function (_super) {
    __extends(DescribeProvisioningTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProvisioningTemplateCommand(input) {
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
    DescribeProvisioningTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeProvisioningTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProvisioningTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProvisioningTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProvisioningTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeProvisioningTemplateCommand(input, context);
    };
    DescribeProvisioningTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeProvisioningTemplateCommand(output, context);
    };
    return DescribeProvisioningTemplateCommand;
}($Command));
export { DescribeProvisioningTemplateCommand };
//# sourceMappingURL=DescribeProvisioningTemplateCommand.js.map