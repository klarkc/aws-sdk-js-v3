import { __extends } from "tslib";
import { DescribeReservedElasticsearchInstancesRequest, DescribeReservedElasticsearchInstancesResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand, serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about reserved Elasticsearch instances for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeReservedElasticsearchInstancesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeReservedElasticsearchInstancesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeReservedElasticsearchInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedElasticsearchInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedElasticsearchInstancesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedElasticsearchInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedElasticsearchInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedElasticsearchInstancesCommand(input) {
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
    DescribeReservedElasticsearchInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribeReservedElasticsearchInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedElasticsearchInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReservedElasticsearchInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedElasticsearchInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand(input, context);
    };
    DescribeReservedElasticsearchInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand(output, context);
    };
    return DescribeReservedElasticsearchInstancesCommand;
}($Command));
export { DescribeReservedElasticsearchInstancesCommand };
//# sourceMappingURL=DescribeReservedElasticsearchInstancesCommand.js.map