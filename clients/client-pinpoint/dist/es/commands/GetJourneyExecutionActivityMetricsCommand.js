import { __extends } from "tslib";
import { GetJourneyExecutionActivityMetricsRequest, GetJourneyExecutionActivityMetricsResponse, } from "../models/models_1";
import { deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand, serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyExecutionActivityMetricsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyExecutionActivityMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyExecutionActivityMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyExecutionActivityMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyExecutionActivityMetricsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJourneyExecutionActivityMetricsCommand = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionActivityMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJourneyExecutionActivityMetricsCommand(input) {
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
    GetJourneyExecutionActivityMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetJourneyExecutionActivityMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJourneyExecutionActivityMetricsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJourneyExecutionActivityMetricsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJourneyExecutionActivityMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand(input, context);
    };
    GetJourneyExecutionActivityMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand(output, context);
    };
    return GetJourneyExecutionActivityMetricsCommand;
}($Command));
export { GetJourneyExecutionActivityMetricsCommand };
//# sourceMappingURL=GetJourneyExecutionActivityMetricsCommand.js.map