"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeScalingPoliciesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves all scaling policies applied to a fleet.</p>
 *         <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this
 *             request by policy status, such as to retrieve only active scaling policies. Use the
 *             pagination parameters to retrieve results as a set of sequential pages. If successful,
 *             set of <a>ScalingPolicy</a> objects is returned for the fleet.</p>
 *         <p>A fleet may have all of its scaling policies suspended (<a>StopFleetActions</a>). This operation does not affect the status of the scaling
 *             policies, which remains ACTIVE. To see whether a fleet's scaling policies are in force
 *             or suspended, call <a>DescribeFleetAttributes</a> and check the stopped
 *             actions.</p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>DescribeFleetCapacity</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DescribeScalingPolicies</a> |
 *                     <a>DeleteScalingPolicy</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>StartFleetActions</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeScalingPoliciesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeScalingPoliciesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeScalingPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPoliciesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeScalingPoliciesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeScalingPoliciesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeScalingPoliciesInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeScalingPoliciesOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeScalingPoliciesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeScalingPoliciesCommand(output, context);
    }
}
exports.DescribeScalingPoliciesCommand = DescribeScalingPoliciesCommand;
//# sourceMappingURL=DescribeScalingPoliciesCommand.js.map