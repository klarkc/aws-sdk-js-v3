import { __extends } from "tslib";
import { DescribeGatewayCapabilityConfigurationRequest, DescribeGatewayCapabilityConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand, serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a gateway capability configuration.
 *       Each gateway capability defines data sources for a gateway. A capability configuration
 *       can contain multiple data source configurations. If you define OPC-UA sources for a gateway in
 *       the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To
 *       list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeGatewayCapabilityConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeGatewayCapabilityConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeGatewayCapabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGatewayCapabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayCapabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGatewayCapabilityConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeGatewayCapabilityConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGatewayCapabilityConfigurationCommand(input) {
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
    DescribeGatewayCapabilityConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DescribeGatewayCapabilityConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGatewayCapabilityConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGatewayCapabilityConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGatewayCapabilityConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand(input, context);
    };
    DescribeGatewayCapabilityConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand(output, context);
    };
    return DescribeGatewayCapabilityConfigurationCommand;
}($Command));
export { DescribeGatewayCapabilityConfigurationCommand };
//# sourceMappingURL=DescribeGatewayCapabilityConfigurationCommand.js.map