import { __extends } from "tslib";
import { UpdateApiDestinationRequest, UpdateApiDestinationResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateApiDestinationCommand, serializeAws_json1_1UpdateApiDestinationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an API destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, UpdateApiDestinationCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, UpdateApiDestinationCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new UpdateApiDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApiDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApiDestinationCommand = /** @class */ (function (_super) {
    __extends(UpdateApiDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApiDestinationCommand(input) {
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
    UpdateApiDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "UpdateApiDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApiDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApiDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApiDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateApiDestinationCommand(input, context);
    };
    UpdateApiDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateApiDestinationCommand(output, context);
    };
    return UpdateApiDestinationCommand;
}($Command));
export { UpdateApiDestinationCommand };
//# sourceMappingURL=UpdateApiDestinationCommand.js.map