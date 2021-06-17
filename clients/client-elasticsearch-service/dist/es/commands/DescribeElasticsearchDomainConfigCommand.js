import { __extends } from "tslib";
import { DescribeElasticsearchDomainConfigRequest, DescribeElasticsearchDomainConfigResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand, serializeAws_restJson1DescribeElasticsearchDomainConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchDomainConfigCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchDomainConfigCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchDomainConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticsearchDomainConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchDomainConfigCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeElasticsearchDomainConfigCommand = /** @class */ (function (_super) {
    __extends(DescribeElasticsearchDomainConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeElasticsearchDomainConfigCommand(input) {
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
    DescribeElasticsearchDomainConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribeElasticsearchDomainConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeElasticsearchDomainConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeElasticsearchDomainConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeElasticsearchDomainConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeElasticsearchDomainConfigCommand(input, context);
    };
    DescribeElasticsearchDomainConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand(output, context);
    };
    return DescribeElasticsearchDomainConfigCommand;
}($Command));
export { DescribeElasticsearchDomainConfigCommand };
//# sourceMappingURL=DescribeElasticsearchDomainConfigCommand.js.map