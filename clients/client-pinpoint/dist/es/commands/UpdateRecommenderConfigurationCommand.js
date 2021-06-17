import { __extends } from "tslib";
import { UpdateRecommenderConfigurationRequest, UpdateRecommenderConfigurationResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateRecommenderConfigurationCommand, serializeAws_restJson1UpdateRecommenderConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRecommenderConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateRecommenderConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRecommenderConfigurationCommand(input) {
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
    UpdateRecommenderConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateRecommenderConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRecommenderConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRecommenderConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRecommenderConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRecommenderConfigurationCommand(input, context);
    };
    UpdateRecommenderConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRecommenderConfigurationCommand(output, context);
    };
    return UpdateRecommenderConfigurationCommand;
}($Command));
export { UpdateRecommenderConfigurationCommand };
//# sourceMappingURL=UpdateRecommenderConfigurationCommand.js.map