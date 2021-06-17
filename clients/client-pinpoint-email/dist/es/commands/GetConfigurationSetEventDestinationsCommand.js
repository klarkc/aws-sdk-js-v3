import { __extends } from "tslib";
import { GetConfigurationSetEventDestinationsRequest, GetConfigurationSetEventDestinationsResponse, } from "../models/models_0";
import { deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand, serializeAws_restJson1GetConfigurationSetEventDestinationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve a list of event destinations that are associated with a configuration
 *             set.</p>
 *         <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
 *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
 *             you can send information about these events to. For example, you can send event data to
 *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
 *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetConfigurationSetEventDestinationsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetConfigurationSetEventDestinationsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetConfigurationSetEventDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConfigurationSetEventDestinationsCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationSetEventDestinationsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConfigurationSetEventDestinationsCommand = /** @class */ (function (_super) {
    __extends(GetConfigurationSetEventDestinationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConfigurationSetEventDestinationsCommand(input) {
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
    GetConfigurationSetEventDestinationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "GetConfigurationSetEventDestinationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConfigurationSetEventDestinationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConfigurationSetEventDestinationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConfigurationSetEventDestinationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetConfigurationSetEventDestinationsCommand(input, context);
    };
    GetConfigurationSetEventDestinationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand(output, context);
    };
    return GetConfigurationSetEventDestinationsCommand;
}($Command));
export { GetConfigurationSetEventDestinationsCommand };
//# sourceMappingURL=GetConfigurationSetEventDestinationsCommand.js.map