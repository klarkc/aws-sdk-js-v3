import { __extends } from "tslib";
import { DescribeEnvironmentManagedActionHistoryRequest, DescribeEnvironmentManagedActionHistoryResult, } from "../models/models_0";
import { deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand, serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists an environment's completed and failed managed actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentManagedActionHistoryCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentManagedActionHistoryCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeEnvironmentManagedActionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentManagedActionHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentManagedActionHistoryCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEnvironmentManagedActionHistoryCommand = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentManagedActionHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEnvironmentManagedActionHistoryCommand(input) {
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
    DescribeEnvironmentManagedActionHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DescribeEnvironmentManagedActionHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEnvironmentManagedActionHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEnvironmentManagedActionHistoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEnvironmentManagedActionHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand(input, context);
    };
    DescribeEnvironmentManagedActionHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand(output, context);
    };
    return DescribeEnvironmentManagedActionHistoryCommand;
}($Command));
export { DescribeEnvironmentManagedActionHistoryCommand };
//# sourceMappingURL=DescribeEnvironmentManagedActionHistoryCommand.js.map