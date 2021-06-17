import { __extends } from "tslib";
import { DeleteRecommenderConfigurationRequest, DeleteRecommenderConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteRecommenderConfigurationCommand, serializeAws_restJson1DeleteRecommenderConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRecommenderConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteRecommenderConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRecommenderConfigurationCommand(input) {
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
    DeleteRecommenderConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteRecommenderConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRecommenderConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRecommenderConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRecommenderConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRecommenderConfigurationCommand(input, context);
    };
    DeleteRecommenderConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRecommenderConfigurationCommand(output, context);
    };
    return DeleteRecommenderConfigurationCommand;
}($Command));
export { DeleteRecommenderConfigurationCommand };
//# sourceMappingURL=DeleteRecommenderConfigurationCommand.js.map