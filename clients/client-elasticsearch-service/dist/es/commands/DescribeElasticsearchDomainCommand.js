import { __extends } from "tslib";
import { DescribeElasticsearchDomainRequest, DescribeElasticsearchDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeElasticsearchDomainCommand, serializeAws_restJson1DescribeElasticsearchDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeElasticsearchDomainCommand = /** @class */ (function (_super) {
    __extends(DescribeElasticsearchDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeElasticsearchDomainCommand(input) {
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
    DescribeElasticsearchDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribeElasticsearchDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeElasticsearchDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeElasticsearchDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeElasticsearchDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeElasticsearchDomainCommand(input, context);
    };
    DescribeElasticsearchDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeElasticsearchDomainCommand(output, context);
    };
    return DescribeElasticsearchDomainCommand;
}($Command));
export { DescribeElasticsearchDomainCommand };
//# sourceMappingURL=DescribeElasticsearchDomainCommand.js.map