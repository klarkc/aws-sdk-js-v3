import { __extends } from "tslib";
import { DescribeDomainConfigurationRequest, DescribeDomainConfigurationResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeDomainConfigurationCommand, serializeAws_restJson1DescribeDomainConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets summary information about a domain configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDomainConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeDomainConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDomainConfigurationCommand(input) {
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
    DescribeDomainConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeDomainConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDomainConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDomainConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDomainConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDomainConfigurationCommand(input, context);
    };
    DescribeDomainConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDomainConfigurationCommand(output, context);
    };
    return DescribeDomainConfigurationCommand;
}($Command));
export { DescribeDomainConfigurationCommand };
//# sourceMappingURL=DescribeDomainConfigurationCommand.js.map