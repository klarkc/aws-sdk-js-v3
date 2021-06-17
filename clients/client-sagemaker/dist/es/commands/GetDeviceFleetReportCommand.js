import { __extends } from "tslib";
import { GetDeviceFleetReportRequest, GetDeviceFleetReportResponse } from "../models/models_2";
import { deserializeAws_json1_1GetDeviceFleetReportCommand, serializeAws_json1_1GetDeviceFleetReportCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetDeviceFleetReportCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetDeviceFleetReportCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new GetDeviceFleetReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceFleetReportCommandInput} for command's `input` shape.
 * @see {@link GetDeviceFleetReportCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeviceFleetReportCommand = /** @class */ (function (_super) {
    __extends(GetDeviceFleetReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeviceFleetReportCommand(input) {
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
    GetDeviceFleetReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "GetDeviceFleetReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeviceFleetReportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeviceFleetReportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeviceFleetReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDeviceFleetReportCommand(input, context);
    };
    GetDeviceFleetReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDeviceFleetReportCommand(output, context);
    };
    return GetDeviceFleetReportCommand;
}($Command));
export { GetDeviceFleetReportCommand };
//# sourceMappingURL=GetDeviceFleetReportCommand.js.map