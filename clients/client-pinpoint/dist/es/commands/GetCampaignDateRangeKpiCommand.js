import { __extends } from "tslib";
import { GetCampaignDateRangeKpiRequest, GetCampaignDateRangeKpiResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCampaignDateRangeKpiCommand, serializeAws_restJson1GetCampaignDateRangeKpiCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetCampaignDateRangeKpiCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCampaignDateRangeKpiCommand = /** @class */ (function (_super) {
    __extends(GetCampaignDateRangeKpiCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCampaignDateRangeKpiCommand(input) {
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
    GetCampaignDateRangeKpiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetCampaignDateRangeKpiCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCampaignDateRangeKpiRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCampaignDateRangeKpiResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCampaignDateRangeKpiCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCampaignDateRangeKpiCommand(input, context);
    };
    GetCampaignDateRangeKpiCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCampaignDateRangeKpiCommand(output, context);
    };
    return GetCampaignDateRangeKpiCommand;
}($Command));
export { GetCampaignDateRangeKpiCommand };
//# sourceMappingURL=GetCampaignDateRangeKpiCommand.js.map