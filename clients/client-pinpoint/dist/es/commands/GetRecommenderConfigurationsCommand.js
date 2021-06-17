import { __extends } from "tslib";
import { GetRecommenderConfigurationsRequest, GetRecommenderConfigurationsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetRecommenderConfigurationsCommand, serializeAws_restJson1GetRecommenderConfigurationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetRecommenderConfigurationsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetRecommenderConfigurationsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetRecommenderConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommenderConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommenderConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRecommenderConfigurationsCommand = /** @class */ (function (_super) {
    __extends(GetRecommenderConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRecommenderConfigurationsCommand(input) {
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
    GetRecommenderConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetRecommenderConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRecommenderConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRecommenderConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRecommenderConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRecommenderConfigurationsCommand(input, context);
    };
    GetRecommenderConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRecommenderConfigurationsCommand(output, context);
    };
    return GetRecommenderConfigurationsCommand;
}($Command));
export { GetRecommenderConfigurationsCommand };
//# sourceMappingURL=GetRecommenderConfigurationsCommand.js.map