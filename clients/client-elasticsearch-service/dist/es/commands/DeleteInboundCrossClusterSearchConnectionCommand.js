import { __extends } from "tslib";
import { DeleteInboundCrossClusterSearchConnectionRequest, DeleteInboundCrossClusterSearchConnectionResponse, } from "../models/models_0";
import { deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand, serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the destination domain owner to delete an existing inbound cross-cluster search connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeleteInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInboundCrossClusterSearchConnectionCommand = /** @class */ (function (_super) {
    __extends(DeleteInboundCrossClusterSearchConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInboundCrossClusterSearchConnectionCommand(input) {
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
    DeleteInboundCrossClusterSearchConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DeleteInboundCrossClusterSearchConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInboundCrossClusterSearchConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInboundCrossClusterSearchConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInboundCrossClusterSearchConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand(input, context);
    };
    DeleteInboundCrossClusterSearchConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand(output, context);
    };
    return DeleteInboundCrossClusterSearchConnectionCommand;
}($Command));
export { DeleteInboundCrossClusterSearchConnectionCommand };
//# sourceMappingURL=DeleteInboundCrossClusterSearchConnectionCommand.js.map