import { __extends } from "tslib";
import { UpdateGatewayCapabilityConfigurationRequest, UpdateGatewayCapabilityConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand, serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a gateway capability configuration or defines a new capability configuration.
 *       Each gateway capability defines data sources for a gateway. A capability configuration
 *       can contain multiple data source configurations. If you define OPC-UA sources for a gateway in
 *       the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To
 *       list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateGatewayCapabilityConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateGatewayCapabilityConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateGatewayCapabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewayCapabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayCapabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGatewayCapabilityConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateGatewayCapabilityConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGatewayCapabilityConfigurationCommand(input) {
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
    UpdateGatewayCapabilityConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "UpdateGatewayCapabilityConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGatewayCapabilityConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGatewayCapabilityConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGatewayCapabilityConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand(input, context);
    };
    UpdateGatewayCapabilityConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand(output, context);
    };
    return UpdateGatewayCapabilityConfigurationCommand;
}($Command));
export { UpdateGatewayCapabilityConfigurationCommand };
//# sourceMappingURL=UpdateGatewayCapabilityConfigurationCommand.js.map