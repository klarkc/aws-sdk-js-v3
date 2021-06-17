import { __extends } from "tslib";
import { CreateOutboundCrossClusterSearchConnectionRequest, CreateOutboundCrossClusterSearchConnectionResponse, } from "../models/models_0";
import { deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand, serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new cross-cluster search connection from a source domain to a destination domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CreateOutboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CreateOutboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new CreateOutboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOutboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateOutboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOutboundCrossClusterSearchConnectionCommand = /** @class */ (function (_super) {
    __extends(CreateOutboundCrossClusterSearchConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateOutboundCrossClusterSearchConnectionCommand(input) {
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
    CreateOutboundCrossClusterSearchConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "CreateOutboundCrossClusterSearchConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOutboundCrossClusterSearchConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOutboundCrossClusterSearchConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOutboundCrossClusterSearchConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand(input, context);
    };
    CreateOutboundCrossClusterSearchConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand(output, context);
    };
    return CreateOutboundCrossClusterSearchConnectionCommand;
}($Command));
export { CreateOutboundCrossClusterSearchConnectionCommand };
//# sourceMappingURL=CreateOutboundCrossClusterSearchConnectionCommand.js.map