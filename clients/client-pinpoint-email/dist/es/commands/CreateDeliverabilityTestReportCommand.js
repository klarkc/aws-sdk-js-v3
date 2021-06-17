import { __extends } from "tslib";
import { CreateDeliverabilityTestReportRequest, CreateDeliverabilityTestReportResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDeliverabilityTestReportCommand, serializeAws_restJson1CreateDeliverabilityTestReportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
 *             by various email providers around the world. When you perform a predictive inbox placement test, you provide a
 *             sample message that contains the content that you plan to send to your customers. Amazon Pinpoint
 *             then sends that message to special email addresses spread across several major email
 *             providers. After about 24 hours, the test is complete, and you can use the
 *                 <code>GetDeliverabilityTestReport</code> operation to view the results of the
 *             test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, CreateDeliverabilityTestReportCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, CreateDeliverabilityTestReportCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new CreateDeliverabilityTestReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeliverabilityTestReportCommandInput} for command's `input` shape.
 * @see {@link CreateDeliverabilityTestReportCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeliverabilityTestReportCommand = /** @class */ (function (_super) {
    __extends(CreateDeliverabilityTestReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeliverabilityTestReportCommand(input) {
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
    CreateDeliverabilityTestReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "CreateDeliverabilityTestReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeliverabilityTestReportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeliverabilityTestReportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeliverabilityTestReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDeliverabilityTestReportCommand(input, context);
    };
    CreateDeliverabilityTestReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDeliverabilityTestReportCommand(output, context);
    };
    return CreateDeliverabilityTestReportCommand;
}($Command));
export { CreateDeliverabilityTestReportCommand };
//# sourceMappingURL=CreateDeliverabilityTestReportCommand.js.map