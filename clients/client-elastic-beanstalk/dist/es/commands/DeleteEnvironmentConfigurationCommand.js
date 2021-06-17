import { __extends } from "tslib";
import { DeleteEnvironmentConfigurationMessage } from "../models/models_0";
import { deserializeAws_queryDeleteEnvironmentConfigurationCommand, serializeAws_queryDeleteEnvironmentConfigurationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the draft configuration associated with the running environment.</p>
 *          <p>Updating a running environment with any configuration changes creates a draft
 *       configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update
 *       fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the
 *       deployment is in process or has failed. The draft configuration remains in existence until it
 *       is deleted with this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteEnvironmentConfigurationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteEnvironmentConfigurationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DeleteEnvironmentConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEnvironmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEnvironmentConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteEnvironmentConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEnvironmentConfigurationCommand(input) {
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
    DeleteEnvironmentConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DeleteEnvironmentConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEnvironmentConfigurationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEnvironmentConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteEnvironmentConfigurationCommand(input, context);
    };
    DeleteEnvironmentConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteEnvironmentConfigurationCommand(output, context);
    };
    return DeleteEnvironmentConfigurationCommand;
}($Command));
export { DeleteEnvironmentConfigurationCommand };
//# sourceMappingURL=DeleteEnvironmentConfigurationCommand.js.map