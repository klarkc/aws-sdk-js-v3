import { __extends } from "tslib";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteClusterCommand, serializeAws_restJson1DeleteClusterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteClusterCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteClusterCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new DeleteClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteClusterCommand = /** @class */ (function (_super) {
    __extends(DeleteClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClusterCommand(input) {
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
    DeleteClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "DeleteClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteClusterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteClusterCommand(input, context);
    };
    DeleteClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteClusterCommand(output, context);
    };
    return DeleteClusterCommand;
}($Command));
export { DeleteClusterCommand };
//# sourceMappingURL=DeleteClusterCommand.js.map