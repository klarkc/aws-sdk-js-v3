import { __extends } from "tslib";
import { DeleteOutboundCrossClusterSearchConnectionRequest, DeleteOutboundCrossClusterSearchConnectionResponse, } from "../models/models_0";
import { deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand, serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the source domain owner to delete an existing outbound cross-cluster search connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteOutboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteOutboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeleteOutboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOutboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteOutboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOutboundCrossClusterSearchConnectionCommand = /** @class */ (function (_super) {
    __extends(DeleteOutboundCrossClusterSearchConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOutboundCrossClusterSearchConnectionCommand(input) {
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
    DeleteOutboundCrossClusterSearchConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DeleteOutboundCrossClusterSearchConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOutboundCrossClusterSearchConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteOutboundCrossClusterSearchConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOutboundCrossClusterSearchConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand(input, context);
    };
    DeleteOutboundCrossClusterSearchConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand(output, context);
    };
    return DeleteOutboundCrossClusterSearchConnectionCommand;
}($Command));
export { DeleteOutboundCrossClusterSearchConnectionCommand };
//# sourceMappingURL=DeleteOutboundCrossClusterSearchConnectionCommand.js.map