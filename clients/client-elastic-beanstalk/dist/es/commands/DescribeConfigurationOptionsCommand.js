import { __extends } from "tslib";
import { ConfigurationOptionsDescription, DescribeConfigurationOptionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeConfigurationOptionsCommand, serializeAws_queryDescribeConfigurationOptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the configuration options that are used in a particular configuration
 *       template or environment, or that a specified solution stack defines. The description includes
 *       the values the options, their default values, and an indication of the required action on a
 *       running environment if an option value is changed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeConfigurationOptionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeConfigurationOptionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationOptionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConfigurationOptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeConfigurationOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConfigurationOptionsCommand(input) {
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
    DescribeConfigurationOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DescribeConfigurationOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConfigurationOptionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigurationOptionsDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConfigurationOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeConfigurationOptionsCommand(input, context);
    };
    DescribeConfigurationOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeConfigurationOptionsCommand(output, context);
    };
    return DescribeConfigurationOptionsCommand;
}($Command));
export { DescribeConfigurationOptionsCommand };
//# sourceMappingURL=DescribeConfigurationOptionsCommand.js.map