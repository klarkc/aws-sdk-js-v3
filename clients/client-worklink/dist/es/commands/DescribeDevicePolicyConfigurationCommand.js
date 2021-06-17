import { __extends } from "tslib";
import { DescribeDevicePolicyConfigurationRequest, DescribeDevicePolicyConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeDevicePolicyConfigurationCommand, serializeAws_restJson1DescribeDevicePolicyConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the device policy configuration for the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeDevicePolicyConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeDevicePolicyConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeDevicePolicyConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDevicePolicyConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDevicePolicyConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDevicePolicyConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeDevicePolicyConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDevicePolicyConfigurationCommand(input) {
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
    DescribeDevicePolicyConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DescribeDevicePolicyConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDevicePolicyConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDevicePolicyConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDevicePolicyConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDevicePolicyConfigurationCommand(input, context);
    };
    DescribeDevicePolicyConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDevicePolicyConfigurationCommand(output, context);
    };
    return DescribeDevicePolicyConfigurationCommand;
}($Command));
export { DescribeDevicePolicyConfigurationCommand };
//# sourceMappingURL=DescribeDevicePolicyConfigurationCommand.js.map