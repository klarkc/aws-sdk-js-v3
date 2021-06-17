import { __extends } from "tslib";
import { DescribeOutboundCrossClusterSearchConnectionsRequest, DescribeOutboundCrossClusterSearchConnectionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand, serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the outbound cross-cluster search connections for a source domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeOutboundCrossClusterSearchConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOutboundCrossClusterSearchConnectionsCommand = /** @class */ (function (_super) {
    __extends(DescribeOutboundCrossClusterSearchConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOutboundCrossClusterSearchConnectionsCommand(input) {
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
    DescribeOutboundCrossClusterSearchConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribeOutboundCrossClusterSearchConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOutboundCrossClusterSearchConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOutboundCrossClusterSearchConnectionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOutboundCrossClusterSearchConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand(input, context);
    };
    DescribeOutboundCrossClusterSearchConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand(output, context);
    };
    return DescribeOutboundCrossClusterSearchConnectionsCommand;
}($Command));
export { DescribeOutboundCrossClusterSearchConnectionsCommand };
//# sourceMappingURL=DescribeOutboundCrossClusterSearchConnectionsCommand.js.map