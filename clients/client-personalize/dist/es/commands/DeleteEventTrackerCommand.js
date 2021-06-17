import { __extends } from "tslib";
import { DeleteEventTrackerRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteEventTrackerCommand, serializeAws_json1_1DeleteEventTrackerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the event tracker. Does not delete the event-interactions dataset from
 *         the associated dataset group. For more
 *         information on event trackers, see <a>CreateEventTracker</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteEventTrackerCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteEventTrackerCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DeleteEventTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventTrackerCommandInput} for command's `input` shape.
 * @see {@link DeleteEventTrackerCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEventTrackerCommand = /** @class */ (function (_super) {
    __extends(DeleteEventTrackerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEventTrackerCommand(input) {
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
    DeleteEventTrackerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DeleteEventTrackerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEventTrackerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEventTrackerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEventTrackerCommand(input, context);
    };
    DeleteEventTrackerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEventTrackerCommand(output, context);
    };
    return DeleteEventTrackerCommand;
}($Command));
export { DeleteEventTrackerCommand };
//# sourceMappingURL=DeleteEventTrackerCommand.js.map