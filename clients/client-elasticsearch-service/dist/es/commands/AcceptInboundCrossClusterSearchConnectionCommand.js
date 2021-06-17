import { __extends } from "tslib";
import { AcceptInboundCrossClusterSearchConnectionRequest, AcceptInboundCrossClusterSearchConnectionResponse, } from "../models/models_0";
import { deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand, serializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the destination domain owner to accept an inbound cross-cluster search connection request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, AcceptInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, AcceptInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new AcceptInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptInboundCrossClusterSearchConnectionCommand = /** @class */ (function (_super) {
    __extends(AcceptInboundCrossClusterSearchConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptInboundCrossClusterSearchConnectionCommand(input) {
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
    AcceptInboundCrossClusterSearchConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "AcceptInboundCrossClusterSearchConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptInboundCrossClusterSearchConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptInboundCrossClusterSearchConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptInboundCrossClusterSearchConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand(input, context);
    };
    AcceptInboundCrossClusterSearchConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand(output, context);
    };
    return AcceptInboundCrossClusterSearchConnectionCommand;
}($Command));
export { AcceptInboundCrossClusterSearchConnectionCommand };
//# sourceMappingURL=AcceptInboundCrossClusterSearchConnectionCommand.js.map