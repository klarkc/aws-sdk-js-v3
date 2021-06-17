import { __extends } from "tslib";
import { RejectInboundCrossClusterSearchConnectionRequest, RejectInboundCrossClusterSearchConnectionResponse, } from "../models/models_0";
import { deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand, serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the destination domain owner to reject an inbound cross-cluster search connection request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, RejectInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, RejectInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new RejectInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectInboundCrossClusterSearchConnectionCommand = /** @class */ (function (_super) {
    __extends(RejectInboundCrossClusterSearchConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectInboundCrossClusterSearchConnectionCommand(input) {
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
    RejectInboundCrossClusterSearchConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "RejectInboundCrossClusterSearchConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectInboundCrossClusterSearchConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectInboundCrossClusterSearchConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectInboundCrossClusterSearchConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand(input, context);
    };
    RejectInboundCrossClusterSearchConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand(output, context);
    };
    return RejectInboundCrossClusterSearchConnectionCommand;
}($Command));
export { RejectInboundCrossClusterSearchConnectionCommand };
//# sourceMappingURL=RejectInboundCrossClusterSearchConnectionCommand.js.map