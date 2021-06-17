import { __extends } from "tslib";
import { ConfigurationSettingsDescription, UpdateConfigurationTemplateMessage } from "../models/models_0";
import { deserializeAws_queryUpdateConfigurationTemplateCommand, serializeAws_queryUpdateConfigurationTemplateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified configuration template to have the specified properties or
 *       configuration option values.</p>
 *          <note>
 *             <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value
 *         remains unchanged. To clear such properties, specify an empty string.</p>
 *          </note>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeConfigurationOptions</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateConfigurationTemplateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateConfigurationTemplateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConfigurationTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateConfigurationTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConfigurationTemplateCommand(input) {
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
    UpdateConfigurationTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "UpdateConfigurationTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConfigurationTemplateMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigurationSettingsDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConfigurationTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateConfigurationTemplateCommand(input, context);
    };
    UpdateConfigurationTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateConfigurationTemplateCommand(output, context);
    };
    return UpdateConfigurationTemplateCommand;
}($Command));
export { UpdateConfigurationTemplateCommand };
//# sourceMappingURL=UpdateConfigurationTemplateCommand.js.map