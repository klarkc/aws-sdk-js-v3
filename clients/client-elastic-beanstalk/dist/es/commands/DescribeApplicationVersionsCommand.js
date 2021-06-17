import { __extends } from "tslib";
import { ApplicationVersionDescriptionsMessage, DescribeApplicationVersionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeApplicationVersionsCommand, serializeAws_queryDescribeApplicationVersionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve a list of application versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeApplicationVersionsCommand = /** @class */ (function (_super) {
    __extends(DescribeApplicationVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeApplicationVersionsCommand(input) {
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
    DescribeApplicationVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DescribeApplicationVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeApplicationVersionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ApplicationVersionDescriptionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeApplicationVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeApplicationVersionsCommand(input, context);
    };
    DescribeApplicationVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeApplicationVersionsCommand(output, context);
    };
    return DescribeApplicationVersionsCommand;
}($Command));
export { DescribeApplicationVersionsCommand };
//# sourceMappingURL=DescribeApplicationVersionsCommand.js.map