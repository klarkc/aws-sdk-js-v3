import { __extends } from "tslib";
import { DescribeEventConfigurationsRequest, DescribeEventConfigurationsResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeEventConfigurationsCommand, serializeAws_restJson1DescribeEventConfigurationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes event configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeEventConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeEventConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeEventConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventConfigurationsCommand = /** @class */ (function (_super) {
    __extends(DescribeEventConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventConfigurationsCommand(input) {
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
    DescribeEventConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeEventConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeEventConfigurationsCommand(input, context);
    };
    DescribeEventConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeEventConfigurationsCommand(output, context);
    };
    return DescribeEventConfigurationsCommand;
}($Command));
export { DescribeEventConfigurationsCommand };
//# sourceMappingURL=DescribeEventConfigurationsCommand.js.map