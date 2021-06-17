import { __extends } from "tslib";
import { ListPlatformVersionsRequest, ListPlatformVersionsResult } from "../models/models_0";
import { deserializeAws_queryListPlatformVersionsCommand, serializeAws_queryListPlatformVersionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the platform versions available for your account in an AWS Region. Provides
 *       summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform
 *       version.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListPlatformVersionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListPlatformVersionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ListPlatformVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlatformVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPlatformVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPlatformVersionsCommand = /** @class */ (function (_super) {
    __extends(ListPlatformVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPlatformVersionsCommand(input) {
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
    ListPlatformVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "ListPlatformVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPlatformVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPlatformVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPlatformVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListPlatformVersionsCommand(input, context);
    };
    ListPlatformVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListPlatformVersionsCommand(output, context);
    };
    return ListPlatformVersionsCommand;
}($Command));
export { ListPlatformVersionsCommand };
//# sourceMappingURL=ListPlatformVersionsCommand.js.map