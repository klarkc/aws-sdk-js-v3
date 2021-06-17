import { __extends } from "tslib";
import { GetJourneyExecutionMetricsRequest, GetJourneyExecutionMetricsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetJourneyExecutionMetricsCommand, serializeAws_restJson1GetJourneyExecutionMetricsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyExecutionMetricsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyExecutionMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyExecutionMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyExecutionMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyExecutionMetricsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJourneyExecutionMetricsCommand = /** @class */ (function (_super) {
    __extends(GetJourneyExecutionMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJourneyExecutionMetricsCommand(input) {
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
    GetJourneyExecutionMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetJourneyExecutionMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJourneyExecutionMetricsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJourneyExecutionMetricsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJourneyExecutionMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetJourneyExecutionMetricsCommand(input, context);
    };
    GetJourneyExecutionMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetJourneyExecutionMetricsCommand(output, context);
    };
    return GetJourneyExecutionMetricsCommand;
}($Command));
export { GetJourneyExecutionMetricsCommand };
//# sourceMappingURL=GetJourneyExecutionMetricsCommand.js.map