import { __extends } from "tslib";
import { DescribeEnvironmentHealthRequest, DescribeEnvironmentHealthResult } from "../models/models_0";
import { deserializeAws_queryDescribeEnvironmentHealthCommand, serializeAws_queryDescribeEnvironmentHealthCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the overall health of the specified environment. The
 *         <b>DescribeEnvironmentHealth</b> operation is only available with
 *       AWS Elastic Beanstalk Enhanced Health.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentHealthCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentHealthCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeEnvironmentHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEnvironmentHealthCommand = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentHealthCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEnvironmentHealthCommand(input) {
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
    DescribeEnvironmentHealthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DescribeEnvironmentHealthCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEnvironmentHealthRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEnvironmentHealthResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEnvironmentHealthCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEnvironmentHealthCommand(input, context);
    };
    DescribeEnvironmentHealthCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEnvironmentHealthCommand(output, context);
    };
    return DescribeEnvironmentHealthCommand;
}($Command));
export { DescribeEnvironmentHealthCommand };
//# sourceMappingURL=DescribeEnvironmentHealthCommand.js.map