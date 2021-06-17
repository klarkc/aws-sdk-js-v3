import { __extends } from "tslib";
import { DescribeAccountAuditConfigurationRequest, DescribeAccountAuditConfigurationResponse, } from "../models/models_1";
import { deserializeAws_restJson1DescribeAccountAuditConfigurationCommand, serializeAws_restJson1DescribeAccountAuditConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the Device Defender audit settings for this account.
 *           Settings include how audit notifications are sent and which audit checks are
 *           enabled or disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountAuditConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountAuditConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountAuditConfigurationCommand(input) {
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
    DescribeAccountAuditConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeAccountAuditConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountAuditConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountAuditConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountAuditConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAccountAuditConfigurationCommand(input, context);
    };
    DescribeAccountAuditConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAccountAuditConfigurationCommand(output, context);
    };
    return DescribeAccountAuditConfigurationCommand;
}($Command));
export { DescribeAccountAuditConfigurationCommand };
//# sourceMappingURL=DescribeAccountAuditConfigurationCommand.js.map