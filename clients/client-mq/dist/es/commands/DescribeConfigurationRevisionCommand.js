import { __extends } from "tslib";
import { DescribeConfigurationRevisionRequest, DescribeConfigurationRevisionResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeConfigurationRevisionCommand, serializeAws_restJson1DescribeConfigurationRevisionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns the specified configuration revision for the specified configuration.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeConfigurationRevisionCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeConfigurationRevisionCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeConfigurationRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationRevisionCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRevisionCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConfigurationRevisionCommand = /** @class */ (function (_super) {
    __extends(DescribeConfigurationRevisionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConfigurationRevisionCommand(input) {
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
    DescribeConfigurationRevisionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "DescribeConfigurationRevisionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConfigurationRevisionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConfigurationRevisionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConfigurationRevisionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeConfigurationRevisionCommand(input, context);
    };
    DescribeConfigurationRevisionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeConfigurationRevisionCommand(output, context);
    };
    return DescribeConfigurationRevisionCommand;
}($Command));
export { DescribeConfigurationRevisionCommand };
//# sourceMappingURL=DescribeConfigurationRevisionCommand.js.map