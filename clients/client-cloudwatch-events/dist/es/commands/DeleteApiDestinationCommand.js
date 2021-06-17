import { __extends } from "tslib";
import { DeleteApiDestinationRequest, DeleteApiDestinationResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteApiDestinationCommand, serializeAws_json1_1DeleteApiDestinationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified API destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeleteApiDestinationCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeleteApiDestinationCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DeleteApiDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApiDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApiDestinationCommand = /** @class */ (function (_super) {
    __extends(DeleteApiDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApiDestinationCommand(input) {
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
    DeleteApiDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "DeleteApiDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApiDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApiDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApiDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteApiDestinationCommand(input, context);
    };
    DeleteApiDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteApiDestinationCommand(output, context);
    };
    return DeleteApiDestinationCommand;
}($Command));
export { DeleteApiDestinationCommand };
//# sourceMappingURL=DeleteApiDestinationCommand.js.map