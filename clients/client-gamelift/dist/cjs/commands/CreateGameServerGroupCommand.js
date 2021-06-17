"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGameServerGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Creates a GameLift FleetIQ game server group for managing game hosting on a collection of
 *             Amazon EC2 instances for game hosting. This operation creates the game server group,
 *             creates an Auto Scaling group in your AWS account, and establishes a link between the
 *             two groups. You can view the status of your game server groups in the GameLift console.
 *             Game server group metrics and events are emitted to Amazon CloudWatch.</p>
 *         <p>Before creating a new game server group, you must have the following: </p>
 *         <ul>
 *             <li>
 *                 <p>An Amazon EC2 launch template that specifies how to launch Amazon EC2 instances
 *                     with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the
 *                         <i>Amazon EC2 User Guide</i>. </p>
 *             </li>
 *             <li>
 *                <p>An IAM role that extends limited access to your AWS account to allow GameLift FleetIQ to create and
 *                     interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>GameLift FleetIQ Developer
 *                         Guide</i>.</p>
 *             </li>
 *          </ul>
 *         <p>To create a new game server group, specify a unique group name, IAM role and Amazon EC2
 *             launch template, and provide a list of instance types that can be used in the group. You
 *             must also set initial maximum and minimum limits on the group's instance count. You can
 *             optionally set an Auto Scaling policy with target tracking based on a GameLift FleetIQ
 *             metric.</p>
 *         <p>Once the game server group and corresponding Auto Scaling group are created, you have
 *             full access to change the Auto Scaling group's configuration as needed. Several
 *             properties that are set when creating a game server group, including maximum/minimum
 *             size and auto-scaling policy settings, must be updated directly in the Auto Scaling
 *             group. Keep in mind that some Auto Scaling group properties are periodically updated by
 *             GameLift FleetIQ as part of its balancing activities to optimize for availability and
 *             cost.</p>
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
 * import { GameLiftClient, CreateGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateGameServerGroupCommand extends smithy_client_1.Command {
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
        const commandName = "CreateGameServerGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateGameServerGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateGameServerGroupOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateGameServerGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateGameServerGroupCommand(output, context);
    }
}
exports.CreateGameServerGroupCommand = CreateGameServerGroupCommand;
//# sourceMappingURL=CreateGameServerGroupCommand.js.map