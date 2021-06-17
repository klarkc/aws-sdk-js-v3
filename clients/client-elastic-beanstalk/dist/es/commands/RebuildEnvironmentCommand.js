import { __extends } from "tslib";
import { RebuildEnvironmentMessage } from "../models/models_0";
import { deserializeAws_queryRebuildEnvironmentCommand, serializeAws_queryRebuildEnvironmentCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes and recreates all of the AWS resources (for example: the Auto Scaling group,
 *       load balancer, etc.) for a specified environment and forces a restart.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RebuildEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RebuildEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RebuildEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebuildEnvironmentCommandInput} for command's `input` shape.
 * @see {@link RebuildEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebuildEnvironmentCommand = /** @class */ (function (_super) {
    __extends(RebuildEnvironmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebuildEnvironmentCommand(input) {
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
    RebuildEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "RebuildEnvironmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebuildEnvironmentMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebuildEnvironmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRebuildEnvironmentCommand(input, context);
    };
    RebuildEnvironmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRebuildEnvironmentCommand(output, context);
    };
    return RebuildEnvironmentCommand;
}($Command));
export { RebuildEnvironmentCommand };
//# sourceMappingURL=RebuildEnvironmentCommand.js.map