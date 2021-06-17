import { __extends } from "tslib";
import { DescribeReservedElasticsearchInstanceOfferingsRequest, DescribeReservedElasticsearchInstanceOfferingsResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand, serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists available reserved Elasticsearch instance offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeReservedElasticsearchInstanceOfferingsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeReservedElasticsearchInstanceOfferingsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeReservedElasticsearchInstanceOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedElasticsearchInstanceOfferingsCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedElasticsearchInstanceOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedElasticsearchInstanceOfferingsCommand(input) {
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
    DescribeReservedElasticsearchInstanceOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribeReservedElasticsearchInstanceOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedElasticsearchInstanceOfferingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReservedElasticsearchInstanceOfferingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedElasticsearchInstanceOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand(input, context);
    };
    DescribeReservedElasticsearchInstanceOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand(output, context);
    };
    return DescribeReservedElasticsearchInstanceOfferingsCommand;
}($Command));
export { DescribeReservedElasticsearchInstanceOfferingsCommand };
//# sourceMappingURL=DescribeReservedElasticsearchInstanceOfferingsCommand.js.map