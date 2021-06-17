import { __extends } from "tslib";
import { DeleteGameServerGroupInput, DeleteGameServerGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteGameServerGroupCommand, serializeAws_json1_1DeleteGameServerGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Terminates a game server group and permanently deletes the game server group record.
 *             You have several options for how these resources are impacted when deleting the game
 *             server group. Depending on the type of delete operation selected, this operation might
 *             affect these resources:</p>
 *             <ul>
 *             <li>
 *                <p>The game server group</p>
 *             </li>
 *             <li>
 *                <p>The corresponding Auto Scaling group</p>
 *             </li>
 *             <li>
 *                <p>All game servers that are currently running in the group</p>
 *             </li>
 *          </ul>
 *         <p>To delete a game server group, identify the game server group to delete and specify
 *             the type of delete operation to initiate. Game server groups can only be deleted if they
 *             are in <code>ACTIVE</code> or <code>ERROR</code> status.</p>
 *         <p>If the delete request is successful, a series of operations are kicked off. The game
 *             server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game
 *             servers from being registered and stops automatic scaling activity. Once all game
 *             servers in the game server group are deregistered, GameLift FleetIQ can begin deleting resources.
 *             If any of the delete operations fail, the game server group is placed in
 *                 <code>ERROR</code> status.</p>
 *         <p>GameLift FleetIQ emits delete events to Amazon CloudWatch.</p>
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
 * import { GameLiftClient, DeleteGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGameServerGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteGameServerGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGameServerGroupCommand(input) {
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
    DeleteGameServerGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeleteGameServerGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGameServerGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGameServerGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGameServerGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteGameServerGroupCommand(input, context);
    };
    DeleteGameServerGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteGameServerGroupCommand(output, context);
    };
    return DeleteGameServerGroupCommand;
}($Command));
export { DeleteGameServerGroupCommand };
//# sourceMappingURL=DeleteGameServerGroupCommand.js.map