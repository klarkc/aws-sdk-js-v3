import { __extends } from "tslib";
import { GetRecommenderConfigurationRequest, GetRecommenderConfigurationResponse } from "../models/models_1";
import { deserializeAws_restJson1GetRecommenderConfigurationCommand, serializeAws_restJson1GetRecommenderConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRecommenderConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetRecommenderConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRecommenderConfigurationCommand(input) {
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
    GetRecommenderConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetRecommenderConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRecommenderConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRecommenderConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRecommenderConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRecommenderConfigurationCommand(input, context);
    };
    GetRecommenderConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRecommenderConfigurationCommand(output, context);
    };
    return GetRecommenderConfigurationCommand;
}($Command));
export { GetRecommenderConfigurationCommand };
//# sourceMappingURL=GetRecommenderConfigurationCommand.js.map