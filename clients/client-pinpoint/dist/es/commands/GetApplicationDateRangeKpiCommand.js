import { __extends } from "tslib";
import { GetApplicationDateRangeKpiRequest, GetApplicationDateRangeKpiResponse } from "../models/models_0";
import { deserializeAws_restJson1GetApplicationDateRangeKpiCommand, serializeAws_restJson1GetApplicationDateRangeKpiCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApplicationDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApplicationDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApplicationDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetApplicationDateRangeKpiCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApplicationDateRangeKpiCommand = /** @class */ (function (_super) {
    __extends(GetApplicationDateRangeKpiCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetApplicationDateRangeKpiCommand(input) {
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
    GetApplicationDateRangeKpiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetApplicationDateRangeKpiCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetApplicationDateRangeKpiRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetApplicationDateRangeKpiResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetApplicationDateRangeKpiCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetApplicationDateRangeKpiCommand(input, context);
    };
    GetApplicationDateRangeKpiCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetApplicationDateRangeKpiCommand(output, context);
    };
    return GetApplicationDateRangeKpiCommand;
}($Command));
export { GetApplicationDateRangeKpiCommand };
//# sourceMappingURL=GetApplicationDateRangeKpiCommand.js.map