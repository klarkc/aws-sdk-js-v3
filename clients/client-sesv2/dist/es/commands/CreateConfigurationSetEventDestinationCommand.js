import { __extends } from "tslib";
import { CreateConfigurationSetEventDestinationRequest, CreateConfigurationSetEventDestinationResponse, } from "../models/models_0";
import { deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand, serializeAws_restJson1CreateConfigurationSetEventDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create an event destination. <i>Events</i> include message sends,
 *             deliveries, opens, clicks, bounces, and complaints. <i>Event
 *                 destinations</i> are places that you can send information about these events
 *             to. For example, you can send event data to Amazon SNS to receive notifications when you
 *             receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term
 *             storage.</p>
 *         <p>A single configuration set can include more than one event destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConfigurationSetEventDestinationCommand = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetEventDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConfigurationSetEventDestinationCommand(input) {
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
    CreateConfigurationSetEventDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "CreateConfigurationSetEventDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConfigurationSetEventDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateConfigurationSetEventDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConfigurationSetEventDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateConfigurationSetEventDestinationCommand(input, context);
    };
    CreateConfigurationSetEventDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand(output, context);
    };
    return CreateConfigurationSetEventDestinationCommand;
}($Command));
export { CreateConfigurationSetEventDestinationCommand };
//# sourceMappingURL=CreateConfigurationSetEventDestinationCommand.js.map