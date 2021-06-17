import { __extends } from "tslib";
import { ListGameServerGroupsInput, ListGameServerGroupsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListGameServerGroupsCommand, serializeAws_json1_1ListGameServerGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves information on all game servers groups that exist in the current AWS
 *             account for the selected Region. Use the pagination parameters to retrieve results in a
 *             set of sequential segments. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameServerGroup</a> |
 *                     <a>ListGameServerGroups</a> |
 *                     <a>DescribeGameServerGroup</a> |
 *                     <a>UpdateGameServerGroup</a> |
 *                     <a>DeleteGameServerGroup</a> |
 *                     <a>ResumeGameServerGroup</a> |
 *                     <a>SuspendGameServerGroup</a> |
 *                     <a>DescribeGameServerInstances</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListGameServerGroupsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListGameServerGroupsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListGameServerGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGameServerGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGameServerGroupsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGameServerGroupsCommand = /** @class */ (function (_super) {
    __extends(ListGameServerGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGameServerGroupsCommand(input) {
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
    ListGameServerGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "ListGameServerGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGameServerGroupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListGameServerGroupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGameServerGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListGameServerGroupsCommand(input, context);
    };
    ListGameServerGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListGameServerGroupsCommand(output, context);
    };
    return ListGameServerGroupsCommand;
}($Command));
export { ListGameServerGroupsCommand };
//# sourceMappingURL=ListGameServerGroupsCommand.js.map