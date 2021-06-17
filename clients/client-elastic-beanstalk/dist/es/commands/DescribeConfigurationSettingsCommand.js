import { __extends } from "tslib";
import { ConfigurationSettingsDescriptions, DescribeConfigurationSettingsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeConfigurationSettingsCommand, serializeAws_queryDescribeConfigurationSettingsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of the settings for the specified configuration set, that is,
 *       either a configuration template or the configuration set associated with a running
 *       environment.</p>
 *          <p>When describing the settings for the configuration set associated with a running
 *       environment, it is possible to receive two sets of setting descriptions. One is the deployed
 *       configuration set, and the other is a draft configuration of an environment that is either in
 *       the process of deployment or that failed to deploy.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteEnvironmentConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeConfigurationSettingsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeConfigurationSettingsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConfigurationSettingsCommand = /** @class */ (function (_super) {
    __extends(DescribeConfigurationSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConfigurationSettingsCommand(input) {
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
    DescribeConfigurationSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DescribeConfigurationSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConfigurationSettingsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigurationSettingsDescriptions.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConfigurationSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeConfigurationSettingsCommand(input, context);
    };
    DescribeConfigurationSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeConfigurationSettingsCommand(output, context);
    };
    return DescribeConfigurationSettingsCommand;
}($Command));
export { DescribeConfigurationSettingsCommand };
//# sourceMappingURL=DescribeConfigurationSettingsCommand.js.map