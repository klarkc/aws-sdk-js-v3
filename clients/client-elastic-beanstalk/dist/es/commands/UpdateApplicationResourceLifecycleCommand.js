import { __extends } from "tslib";
import { ApplicationResourceLifecycleDescriptionMessage, UpdateApplicationResourceLifecycleMessage, } from "../models/models_0";
import { deserializeAws_queryUpdateApplicationResourceLifecycleCommand, serializeAws_queryUpdateApplicationResourceLifecycleCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies lifecycle settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateApplicationResourceLifecycleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationResourceLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationResourceLifecycleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApplicationResourceLifecycleCommand = /** @class */ (function (_super) {
    __extends(UpdateApplicationResourceLifecycleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApplicationResourceLifecycleCommand(input) {
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
    UpdateApplicationResourceLifecycleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "UpdateApplicationResourceLifecycleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApplicationResourceLifecycleMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ApplicationResourceLifecycleDescriptionMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApplicationResourceLifecycleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateApplicationResourceLifecycleCommand(input, context);
    };
    UpdateApplicationResourceLifecycleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateApplicationResourceLifecycleCommand(output, context);
    };
    return UpdateApplicationResourceLifecycleCommand;
}($Command));
export { UpdateApplicationResourceLifecycleCommand };
//# sourceMappingURL=UpdateApplicationResourceLifecycleCommand.js.map