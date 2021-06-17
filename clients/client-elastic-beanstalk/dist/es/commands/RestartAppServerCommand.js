import { __extends } from "tslib";
import { RestartAppServerMessage } from "../models/models_0";
import { deserializeAws_queryRestartAppServerCommand, serializeAws_queryRestartAppServerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Causes the environment to restart the application container server running on each
 *       Amazon EC2 instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RestartAppServerCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RestartAppServerCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RestartAppServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestartAppServerCommandInput} for command's `input` shape.
 * @see {@link RestartAppServerCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestartAppServerCommand = /** @class */ (function (_super) {
    __extends(RestartAppServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestartAppServerCommand(input) {
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
    RestartAppServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "RestartAppServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestartAppServerMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestartAppServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRestartAppServerCommand(input, context);
    };
    RestartAppServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRestartAppServerCommand(output, context);
    };
    return RestartAppServerCommand;
}($Command));
export { RestartAppServerCommand };
//# sourceMappingURL=RestartAppServerCommand.js.map