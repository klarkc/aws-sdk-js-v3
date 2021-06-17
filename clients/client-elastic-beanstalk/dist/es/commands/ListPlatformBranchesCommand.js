import { __extends } from "tslib";
import { ListPlatformBranchesRequest, ListPlatformBranchesResult } from "../models/models_0";
import { deserializeAws_queryListPlatformBranchesCommand, serializeAws_queryListPlatformBranchesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the platform branches available for your account in an AWS Region. Provides
 *       summary information about each platform branch.</p>
 *          <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListPlatformBranchesCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListPlatformBranchesCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ListPlatformBranchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlatformBranchesCommandInput} for command's `input` shape.
 * @see {@link ListPlatformBranchesCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPlatformBranchesCommand = /** @class */ (function (_super) {
    __extends(ListPlatformBranchesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPlatformBranchesCommand(input) {
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
    ListPlatformBranchesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "ListPlatformBranchesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPlatformBranchesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPlatformBranchesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPlatformBranchesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListPlatformBranchesCommand(input, context);
    };
    ListPlatformBranchesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListPlatformBranchesCommand(output, context);
    };
    return ListPlatformBranchesCommand;
}($Command));
export { ListPlatformBranchesCommand };
//# sourceMappingURL=ListPlatformBranchesCommand.js.map