import { __extends } from "tslib";
import { ListEventTrackersRequest, ListEventTrackersResponse } from "../models/models_0";
import { deserializeAws_json1_1ListEventTrackersCommand, serializeAws_json1_1ListEventTrackersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of event trackers associated with the account.
 *       The response provides the properties for each event tracker, including the Amazon Resource
 *       Name (ARN) and tracking ID. For more
 *       information on event trackers, see <a>CreateEventTracker</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListEventTrackersCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListEventTrackersCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListEventTrackersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventTrackersCommandInput} for command's `input` shape.
 * @see {@link ListEventTrackersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEventTrackersCommand = /** @class */ (function (_super) {
    __extends(ListEventTrackersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEventTrackersCommand(input) {
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
    ListEventTrackersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListEventTrackersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEventTrackersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEventTrackersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEventTrackersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListEventTrackersCommand(input, context);
    };
    ListEventTrackersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListEventTrackersCommand(output, context);
    };
    return ListEventTrackersCommand;
}($Command));
export { ListEventTrackersCommand };
//# sourceMappingURL=ListEventTrackersCommand.js.map