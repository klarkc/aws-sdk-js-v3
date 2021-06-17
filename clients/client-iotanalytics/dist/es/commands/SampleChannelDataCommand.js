import { __extends } from "tslib";
import { SampleChannelDataRequest, SampleChannelDataResponse } from "../models/models_0";
import { deserializeAws_restJson1SampleChannelDataCommand, serializeAws_restJson1SampleChannelDataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a sample of messages from the specified channel ingested during the specified
 *       timeframe. Up to 10 messages can be retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, SampleChannelDataCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, SampleChannelDataCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new SampleChannelDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SampleChannelDataCommandInput} for command's `input` shape.
 * @see {@link SampleChannelDataCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SampleChannelDataCommand = /** @class */ (function (_super) {
    __extends(SampleChannelDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SampleChannelDataCommand(input) {
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
    SampleChannelDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "SampleChannelDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SampleChannelDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SampleChannelDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SampleChannelDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SampleChannelDataCommand(input, context);
    };
    SampleChannelDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SampleChannelDataCommand(output, context);
    };
    return SampleChannelDataCommand;
}($Command));
export { SampleChannelDataCommand };
//# sourceMappingURL=SampleChannelDataCommand.js.map