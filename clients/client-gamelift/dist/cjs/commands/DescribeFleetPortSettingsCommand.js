"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeFleetPortSettingsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the
 *             range of IP addresses and port settings that incoming traffic can use to access server
 *             processes in the fleet. Game sessions that are running on instances in the fleet must
 *             use connections that fall in this range.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve the inbound connection permissions for a fleet, identify the
 *                     fleet's unique identifier. </p>
 *             </li>
 *             <li>
 *                 <p>To check the status of recent updates to a fleet remote location, specify
 *                     the fleet ID and a location. Port setting updates can take time to
 *                     propagate across all locations. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, a set of <a>IpPermission</a> objects is returned for the
 *             requested fleet ID. When a location is specified, a pending status is included. If the
 *             requested fleet has been deleted, the result set is empty.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
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
 * import { GameLiftClient, DescribeFleetPortSettingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetPortSettingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetPortSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetPortSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetPortSettingsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeFleetPortSettingsCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeFleetPortSettingsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeFleetPortSettingsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeFleetPortSettingsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeFleetPortSettingsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeFleetPortSettingsCommand(output, context);
    }
}
exports.DescribeFleetPortSettingsCommand = DescribeFleetPortSettingsCommand;
//# sourceMappingURL=DescribeFleetPortSettingsCommand.js.map