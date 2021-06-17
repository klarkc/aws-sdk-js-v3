import { __extends } from "tslib";
import { DeleteAggregationAuthorizationRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteAggregationAuthorizationCommand, serializeAws_json1_1DeleteAggregationAuthorizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the authorization granted to the specified
 * 			configuration aggregator account in a specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteAggregationAuthorizationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteAggregationAuthorizationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteAggregationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAggregationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteAggregationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAggregationAuthorizationCommand = /** @class */ (function (_super) {
    __extends(DeleteAggregationAuthorizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAggregationAuthorizationCommand(input) {
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
    DeleteAggregationAuthorizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteAggregationAuthorizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAggregationAuthorizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAggregationAuthorizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAggregationAuthorizationCommand(input, context);
    };
    DeleteAggregationAuthorizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAggregationAuthorizationCommand(output, context);
    };
    return DeleteAggregationAuthorizationCommand;
}($Command));
export { DeleteAggregationAuthorizationCommand };
//# sourceMappingURL=DeleteAggregationAuthorizationCommand.js.map