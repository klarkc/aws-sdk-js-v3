import { __extends } from "tslib";
import { GetSuiteRunReportRequest, GetSuiteRunReportResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSuiteRunReportCommand, serializeAws_restJson1GetSuiteRunReportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteRunReportCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteRunReportCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new GetSuiteRunReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuiteRunReportCommandInput} for command's `input` shape.
 * @see {@link GetSuiteRunReportCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSuiteRunReportCommand = /** @class */ (function (_super) {
    __extends(GetSuiteRunReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSuiteRunReportCommand(input) {
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
    GetSuiteRunReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IotDeviceAdvisorClient";
        var commandName = "GetSuiteRunReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSuiteRunReportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSuiteRunReportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSuiteRunReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSuiteRunReportCommand(input, context);
    };
    GetSuiteRunReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSuiteRunReportCommand(output, context);
    };
    return GetSuiteRunReportCommand;
}($Command));
export { GetSuiteRunReportCommand };
//# sourceMappingURL=GetSuiteRunReportCommand.js.map