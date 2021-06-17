"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGameServerGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Updates GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group
 *             properties are updated on the Auto Scaling group directly, including the launch
 *             template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p>
 *         <p>To update the game server group, specify the game server group ID and provide the
 *             updated values. Before applying the updates, the new values are validated to ensure that
 *             GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <a>GameServerGroup</a> object is returned.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *
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
 * import { GameLiftClient, UpdateGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateGameServerGroupCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GameLiftClient";
        const commandName = "UpdateGameServerGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateGameServerGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateGameServerGroupOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateGameServerGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateGameServerGroupCommand(output, context);
    }
}
exports.UpdateGameServerGroupCommand = UpdateGameServerGroupCommand;
//# sourceMappingURL=UpdateGameServerGroupCommand.js.map