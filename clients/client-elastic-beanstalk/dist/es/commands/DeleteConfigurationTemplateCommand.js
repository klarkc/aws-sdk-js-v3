import { __extends } from "tslib";
import { DeleteConfigurationTemplateMessage } from "../models/models_0";
import { deserializeAws_queryDeleteConfigurationTemplateCommand, serializeAws_queryDeleteConfigurationTemplateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified configuration template.</p>
 *          <note>
 *             <p>When you launch an environment using a configuration template, the environment gets a
 *         copy of the template. You can delete or modify the environment's copy of the template
 *         without affecting the running environment.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteConfigurationTemplateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteConfigurationTemplateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DeleteConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConfigurationTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteConfigurationTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConfigurationTemplateCommand(input) {
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
    DeleteConfigurationTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DeleteConfigurationTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConfigurationTemplateMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConfigurationTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteConfigurationTemplateCommand(input, context);
    };
    DeleteConfigurationTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteConfigurationTemplateCommand(output, context);
    };
    return DeleteConfigurationTemplateCommand;
}($Command));
export { DeleteConfigurationTemplateCommand };
//# sourceMappingURL=DeleteConfigurationTemplateCommand.js.map