"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFleetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your
 *             custom game server or Realtime Servers. Use this operation to configure the computing resources for
 *             your fleet and provide instructions for running game servers on each instance.</p>
 *         <p>Most GameLift fleets can deploy instances to multiple locations, including the home
 *             Region (where the fleet is created) and an optional set of remote locations. Fleets that
 *             are created in the following AWS Regions support multiple locations: us-east-1 (N.
 *             Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland),
 *             ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that
 *             are created in other GameLift Regions can deploy instances in the fleet's home Region
 *             only. All fleet instances use the same configuration regardless of location; however,
 *             you can adjust capacity settings and turn auto-scaling on/off for each location.</p>
 *         <p>To create a fleet, choose the hardware for your instances, specify a game server build
 *             or Realtime script to deploy, and provide a runtime configuration to direct GameLift how
 *             to start and run game servers on each instance in the fleet. Set permissions for inbound
 *             traffic to your game servers, and enable optional features as needed. When creating a
 *             multi-location fleet, provide a list of additional remote locations.</p>
 *
 *         <p>If successful, this operation creates a new Fleet resource and places it in
 *                 <code>NEW</code> status, which prompts GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creation-workflow.html">fleet creation
 *                 workflow</a>. You can track fleet creation by checking fleet status using <a>DescribeFleetAttributes</a> and <a>DescribeFleetLocationAttributes</a>/, or by monitoring fleet creation events
 *             using <a>DescribeFleetEvents</a>. As soon as the fleet status changes to
 *                 <code>ACTIVE</code>, you can enable automatic scaling for the fleet with <a>PutScalingPolicy</a> and set capacity for the home Region with <a>UpdateFleetCapacity</a>. When the status of each remote location reaches
 *                 <code>ACTIVE</code>, you can set capacity by location using <a>UpdateFleetCapacity</a>.</p>
 *
 *
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleet</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateFleetCommand extends smithy_client_1.Command {
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
        const commandName = "CreateFleetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateFleetInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateFleetOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateFleetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateFleetCommand(output, context);
    }
}
exports.CreateFleetCommand = CreateFleetCommand;
//# sourceMappingURL=CreateFleetCommand.js.map