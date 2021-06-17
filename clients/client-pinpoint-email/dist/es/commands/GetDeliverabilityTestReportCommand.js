import { __extends } from "tslib";
import { GetDeliverabilityTestReportRequest, GetDeliverabilityTestReportResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDeliverabilityTestReportCommand, serializeAws_restJson1GetDeliverabilityTestReportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve the results of a predictive inbox placement test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDeliverabilityTestReportCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDeliverabilityTestReportCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetDeliverabilityTestReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeliverabilityTestReportCommandInput} for command's `input` shape.
 * @see {@link GetDeliverabilityTestReportCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeliverabilityTestReportCommand = /** @class */ (function (_super) {
    __extends(GetDeliverabilityTestReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeliverabilityTestReportCommand(input) {
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
    GetDeliverabilityTestReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "GetDeliverabilityTestReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeliverabilityTestReportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeliverabilityTestReportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeliverabilityTestReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDeliverabilityTestReportCommand(input, context);
    };
    GetDeliverabilityTestReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDeliverabilityTestReportCommand(output, context);
    };
    return GetDeliverabilityTestReportCommand;
}($Command));
export { GetDeliverabilityTestReportCommand };
//# sourceMappingURL=GetDeliverabilityTestReportCommand.js.map