import { __extends } from "tslib";
import { DescribeInboundCrossClusterSearchConnectionsRequest, DescribeInboundCrossClusterSearchConnectionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand, serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the inbound cross-cluster search connections for a destination domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeInboundCrossClusterSearchConnectionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeInboundCrossClusterSearchConnectionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeInboundCrossClusterSearchConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInboundCrossClusterSearchConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundCrossClusterSearchConnectionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInboundCrossClusterSearchConnectionsCommand = /** @class */ (function (_super) {
    __extends(DescribeInboundCrossClusterSearchConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInboundCrossClusterSearchConnectionsCommand(input) {
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
    DescribeInboundCrossClusterSearchConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribeInboundCrossClusterSearchConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInboundCrossClusterSearchConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInboundCrossClusterSearchConnectionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInboundCrossClusterSearchConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand(input, context);
    };
    DescribeInboundCrossClusterSearchConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand(output, context);
    };
    return DescribeInboundCrossClusterSearchConnectionsCommand;
}($Command));
export { DescribeInboundCrossClusterSearchConnectionsCommand };
//# sourceMappingURL=DescribeInboundCrossClusterSearchConnectionsCommand.js.map