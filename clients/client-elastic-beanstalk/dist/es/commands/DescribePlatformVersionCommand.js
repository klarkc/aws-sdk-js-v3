import { __extends } from "tslib";
import { DescribePlatformVersionRequest, DescribePlatformVersionResult } from "../models/models_0";
import { deserializeAws_queryDescribePlatformVersionCommand, serializeAws_queryDescribePlatformVersionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of
 *       platform versions.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribePlatformVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePlatformVersionCommand = /** @class */ (function (_super) {
    __extends(DescribePlatformVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePlatformVersionCommand(input) {
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
    DescribePlatformVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DescribePlatformVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePlatformVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePlatformVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePlatformVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribePlatformVersionCommand(input, context);
    };
    DescribePlatformVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribePlatformVersionCommand(output, context);
    };
    return DescribePlatformVersionCommand;
}($Command));
export { DescribePlatformVersionCommand };
//# sourceMappingURL=DescribePlatformVersionCommand.js.map