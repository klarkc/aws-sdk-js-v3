"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeFleetUtilizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves utilization statistics for one or more fleets. Utilization data provides a
 *             snapshot of how the fleet's hosting resources are currently being used. For fleets with
 *             remote locations, this operation retrieves data for the fleet's home Region only. See <a>DescribeFleetLocationUtilization</a> to get utilization statistics for a
 *             fleet's remote locations.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get utilization data for one or more specific fleets, provide a list of
 *                     fleet IDs or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                 <p>To get utilization data for all fleets, do not provide a fleet identifier.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>When requesting multiple fleets, use the pagination parameters to retrieve results as
 *             a set of sequential pages. </p>
 *         <p>If successful, a <a>FleetUtilization</a> object is returned for each
 *             requested fleet ID, unless the fleet identifier is not found. Each fleet utilization
 *             object includes a <code>Location</code> property, which is set to the fleet's home
 *             Region. </p>
 *         <note>
 *             <p>Some API operations may limit the number of fleet IDs allowed in one request. If a
 *                 request exceeds this limit, the request fails and the error message includes the
 *                 maximum allowed.</p>
 *         </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a>
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
 * import { GameLiftClient, DescribeFleetUtilizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetUtilizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetUtilizationCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetUtilizationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeFleetUtilizationCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeFleetUtilizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeFleetUtilizationInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeFleetUtilizationOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeFleetUtilizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeFleetUtilizationCommand(output, context);
    }
}
exports.DescribeFleetUtilizationCommand = DescribeFleetUtilizationCommand;
//# sourceMappingURL=DescribeFleetUtilizationCommand.js.map