import { __extends } from "tslib";
import { AbortEnvironmentUpdateMessage } from "../models/models_0";
import { deserializeAws_queryAbortEnvironmentUpdateCommand, serializeAws_queryAbortEnvironmentUpdateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels in-progress environment configuration update or application version
 *       deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new AbortEnvironmentUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortEnvironmentUpdateCommandInput} for command's `input` shape.
 * @see {@link AbortEnvironmentUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AbortEnvironmentUpdateCommand = /** @class */ (function (_super) {
    __extends(AbortEnvironmentUpdateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AbortEnvironmentUpdateCommand(input) {
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
    AbortEnvironmentUpdateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "AbortEnvironmentUpdateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AbortEnvironmentUpdateMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AbortEnvironmentUpdateCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAbortEnvironmentUpdateCommand(input, context);
    };
    AbortEnvironmentUpdateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAbortEnvironmentUpdateCommand(output, context);
    };
    return AbortEnvironmentUpdateCommand;
}($Command));
export { AbortEnvironmentUpdateCommand };
//# sourceMappingURL=AbortEnvironmentUpdateCommand.js.map