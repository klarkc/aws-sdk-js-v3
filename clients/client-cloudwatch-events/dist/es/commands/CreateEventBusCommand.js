import { __extends } from "tslib";
import { CreateEventBusRequest, CreateEventBusResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateEventBusCommand, serializeAws_json1_1CreateEventBusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new event bus within your account. This can be a custom event bus which you can
 *       use to receive events from your custom applications and services, or it can be a partner event
 *       bus which can be matched to a partner event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreateEventBusCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreateEventBusCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new CreateEventBusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventBusCommandInput} for command's `input` shape.
 * @see {@link CreateEventBusCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEventBusCommand = /** @class */ (function (_super) {
    __extends(CreateEventBusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEventBusCommand(input) {
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
    CreateEventBusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "CreateEventBusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEventBusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEventBusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEventBusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateEventBusCommand(input, context);
    };
    CreateEventBusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateEventBusCommand(output, context);
    };
    return CreateEventBusCommand;
}($Command));
export { CreateEventBusCommand };
//# sourceMappingURL=CreateEventBusCommand.js.map