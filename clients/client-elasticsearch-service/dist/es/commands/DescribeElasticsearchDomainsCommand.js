import { __extends } from "tslib";
import { DescribeElasticsearchDomainsRequest, DescribeElasticsearchDomainsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeElasticsearchDomainsCommand, serializeAws_restJson1DescribeElasticsearchDomainsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchDomainsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchDomainsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticsearchDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchDomainsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeElasticsearchDomainsCommand = /** @class */ (function (_super) {
    __extends(DescribeElasticsearchDomainsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeElasticsearchDomainsCommand(input) {
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
    DescribeElasticsearchDomainsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribeElasticsearchDomainsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeElasticsearchDomainsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeElasticsearchDomainsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeElasticsearchDomainsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeElasticsearchDomainsCommand(input, context);
    };
    DescribeElasticsearchDomainsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeElasticsearchDomainsCommand(output, context);
    };
    return DescribeElasticsearchDomainsCommand;
}($Command));
export { DescribeElasticsearchDomainsCommand };
//# sourceMappingURL=DescribeElasticsearchDomainsCommand.js.map