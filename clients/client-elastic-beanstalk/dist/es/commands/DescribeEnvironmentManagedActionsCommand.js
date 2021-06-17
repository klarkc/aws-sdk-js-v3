import { __extends } from "tslib";
import { DescribeEnvironmentManagedActionsRequest, DescribeEnvironmentManagedActionsResult } from "../models/models_0";
import { deserializeAws_queryDescribeEnvironmentManagedActionsCommand, serializeAws_queryDescribeEnvironmentManagedActionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists an environment's upcoming and in-progress managed actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentManagedActionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentManagedActionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeEnvironmentManagedActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentManagedActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentManagedActionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEnvironmentManagedActionsCommand = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentManagedActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEnvironmentManagedActionsCommand(input) {
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
    DescribeEnvironmentManagedActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DescribeEnvironmentManagedActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEnvironmentManagedActionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEnvironmentManagedActionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEnvironmentManagedActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEnvironmentManagedActionsCommand(input, context);
    };
    DescribeEnvironmentManagedActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEnvironmentManagedActionsCommand(output, context);
    };
    return DescribeEnvironmentManagedActionsCommand;
}($Command));
export { DescribeEnvironmentManagedActionsCommand };
//# sourceMappingURL=DescribeEnvironmentManagedActionsCommand.js.map