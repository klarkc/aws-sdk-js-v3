import { __extends } from "tslib";
import { DescribeElasticsearchInstanceTypeLimitsRequest, DescribeElasticsearchInstanceTypeLimitsResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand, serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *     Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion.
 *     When modifying existing Domain, specify the
 *     <code>
 *       <a>DomainName</a>
 *     </code>
 *     to know what Limits are supported for modifying.
 *   </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchInstanceTypeLimitsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchInstanceTypeLimitsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchInstanceTypeLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticsearchInstanceTypeLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchInstanceTypeLimitsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeElasticsearchInstanceTypeLimitsCommand = /** @class */ (function (_super) {
    __extends(DescribeElasticsearchInstanceTypeLimitsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeElasticsearchInstanceTypeLimitsCommand(input) {
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
    DescribeElasticsearchInstanceTypeLimitsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribeElasticsearchInstanceTypeLimitsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeElasticsearchInstanceTypeLimitsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeElasticsearchInstanceTypeLimitsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeElasticsearchInstanceTypeLimitsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand(input, context);
    };
    DescribeElasticsearchInstanceTypeLimitsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand(output, context);
    };
    return DescribeElasticsearchInstanceTypeLimitsCommand;
}($Command));
export { DescribeElasticsearchInstanceTypeLimitsCommand };
//# sourceMappingURL=DescribeElasticsearchInstanceTypeLimitsCommand.js.map