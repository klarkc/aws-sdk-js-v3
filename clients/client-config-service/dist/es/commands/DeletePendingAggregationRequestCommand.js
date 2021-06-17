import { __extends } from "tslib";
import { DeletePendingAggregationRequestRequest } from "../models/models_0";
import { deserializeAws_json1_1DeletePendingAggregationRequestCommand, serializeAws_json1_1DeletePendingAggregationRequestCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes pending authorization requests for a specified
 * 			aggregator account in a specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeletePendingAggregationRequestCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeletePendingAggregationRequestCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeletePendingAggregationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePendingAggregationRequestCommandInput} for command's `input` shape.
 * @see {@link DeletePendingAggregationRequestCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePendingAggregationRequestCommand = /** @class */ (function (_super) {
    __extends(DeletePendingAggregationRequestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePendingAggregationRequestCommand(input) {
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
    DeletePendingAggregationRequestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeletePendingAggregationRequestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePendingAggregationRequestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePendingAggregationRequestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePendingAggregationRequestCommand(input, context);
    };
    DeletePendingAggregationRequestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePendingAggregationRequestCommand(output, context);
    };
    return DeletePendingAggregationRequestCommand;
}($Command));
export { DeletePendingAggregationRequestCommand };
//# sourceMappingURL=DeletePendingAggregationRequestCommand.js.map