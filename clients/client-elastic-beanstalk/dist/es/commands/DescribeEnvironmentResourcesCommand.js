import { __extends } from "tslib";
import { DescribeEnvironmentResourcesMessage, EnvironmentResourceDescriptionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeEnvironmentResourcesCommand, serializeAws_queryDescribeEnvironmentResourcesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns AWS resources for this environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentResourcesCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentResourcesCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeEnvironmentResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentResourcesCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEnvironmentResourcesCommand = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEnvironmentResourcesCommand(input) {
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
    DescribeEnvironmentResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DescribeEnvironmentResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEnvironmentResourcesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EnvironmentResourceDescriptionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEnvironmentResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEnvironmentResourcesCommand(input, context);
    };
    DescribeEnvironmentResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEnvironmentResourcesCommand(output, context);
    };
    return DescribeEnvironmentResourcesCommand;
}($Command));
export { DescribeEnvironmentResourcesCommand };
//# sourceMappingURL=DescribeEnvironmentResourcesCommand.js.map