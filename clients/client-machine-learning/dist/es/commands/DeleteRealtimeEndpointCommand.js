import { __extends } from "tslib";
import { DeleteRealtimeEndpointInput, DeleteRealtimeEndpointOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteRealtimeEndpointCommand, serializeAws_json1_1DeleteRealtimeEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a real time endpoint of an <code>MLModel</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteRealtimeEndpointCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteRealtimeEndpointCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteRealtimeEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRealtimeEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteRealtimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRealtimeEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteRealtimeEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRealtimeEndpointCommand(input) {
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
    DeleteRealtimeEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "DeleteRealtimeEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRealtimeEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRealtimeEndpointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRealtimeEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRealtimeEndpointCommand(input, context);
    };
    DeleteRealtimeEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRealtimeEndpointCommand(output, context);
    };
    return DeleteRealtimeEndpointCommand;
}($Command));
export { DeleteRealtimeEndpointCommand };
//# sourceMappingURL=DeleteRealtimeEndpointCommand.js.map