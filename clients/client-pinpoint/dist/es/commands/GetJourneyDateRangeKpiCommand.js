import { __extends } from "tslib";
import { GetJourneyDateRangeKpiRequest, GetJourneyDateRangeKpiResponse } from "../models/models_1";
import { deserializeAws_restJson1GetJourneyDateRangeKpiCommand, serializeAws_restJson1GetJourneyDateRangeKpiCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetJourneyDateRangeKpiCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJourneyDateRangeKpiCommand = /** @class */ (function (_super) {
    __extends(GetJourneyDateRangeKpiCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJourneyDateRangeKpiCommand(input) {
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
    GetJourneyDateRangeKpiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetJourneyDateRangeKpiCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJourneyDateRangeKpiRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJourneyDateRangeKpiResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJourneyDateRangeKpiCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetJourneyDateRangeKpiCommand(input, context);
    };
    GetJourneyDateRangeKpiCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetJourneyDateRangeKpiCommand(output, context);
    };
    return GetJourneyDateRangeKpiCommand;
}($Command));
export { GetJourneyDateRangeKpiCommand };
//# sourceMappingURL=GetJourneyDateRangeKpiCommand.js.map