"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeFleetCapacityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the resource capacity settings for one or more fleets. The data returned
 *             includes the current fleet capacity (number of EC2 instances), and settings that can
 *             control how capacity scaling. For fleets with remote locations, this operation retrieves
 *             data for the fleet's home Region only. See <a>DescribeFleetLocationCapacity</a> to get capacity settings for a fleet's remote locations.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get capacity data for one or more specific fleets, provide a list of fleet
 *                     IDs or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                 <p>To get capacity data for all fleets, do not provide a fleet identifier. </p>
 *             </li>
 *          </ul>
 *         <p>When requesting multiple fleets, use the pagination parameters to retrieve results as
 *             a set of sequential pages. </p>
 *         <p>If successful, a <a>FleetCapacity</a> object is returned for each requested
 *             fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is
 *             set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects
 *             are returned only for fleets that currently exist.</p>
 *         <note>
 *             <p>Some API operations may limit the number of fleet IDs that are allowed in one
 *                 request. If a request exceeds this limit, the request fails and the error message
 *                 includes the maximum allowed.</p>
 *         </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>ListFleets</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetEvents</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetPortSettings</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>DescribeRuntimeConfiguration</a> |
 *                     <a>DescribeScalingPolicies</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetCapacityCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetCapacityCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetCapacityCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetCapacityCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeFleetCapacityCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeFleetCapacityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeFleetCapacityInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeFleetCapacityOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeFleetCapacityCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeFleetCapacityCommand(output, context);
    }
}
exports.DescribeFleetCapacityCommand = DescribeFleetCapacityCommand;
//# sourceMappingURL=DescribeFleetCapacityCommand.js.map