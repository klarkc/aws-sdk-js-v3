"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifySpotFleetRequestCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the specified Spot Fleet request.</p>
 *          <p>You can only modify a Spot Fleet request of type <code>maintain</code>.</p>
 *          <p>While the Spot Fleet request is being modified, it is in the <code>modifying</code> state.</p>
 *          <p>To scale up your Spot Fleet, increase its target capacity. The Spot Fleet launches the
 *             additional Spot Instances according to the allocation strategy for the Spot Fleet
 *             request. If the allocation strategy is <code>lowestPrice</code>, the Spot Fleet launches
 *             instances using the Spot Instance pool with the lowest price. If the allocation strategy
 *             is <code>diversified</code>, the Spot Fleet distributes the instances across the Spot
 *             Instance pools. If the allocation strategy is <code>capacityOptimized</code>, Spot Fleet
 *             launches instances from Spot Instance pools with optimal capacity for the number of instances
 *             that are launching.</p>
 *          <p>To scale down your Spot Fleet, decrease its target capacity. First, the Spot Fleet
 *             cancels any open requests that exceed the new target capacity. You can request that the
 *             Spot Fleet terminate Spot Instances until the size of the fleet no longer exceeds the
 *             new target capacity. If the allocation strategy is <code>lowestPrice</code>, the Spot
 *             Fleet terminates the instances with the highest price per unit. If the allocation
 *             strategy is <code>capacityOptimized</code>, the Spot Fleet terminates the instances in
 *             the Spot Instance pools that have the least available Spot Instance capacity. If the allocation
 *             strategy is <code>diversified</code>, the Spot Fleet terminates instances across the
 *             Spot Instance pools. Alternatively, you can request that the Spot Fleet keep the fleet
 *             at its current size, but not replace any Spot Instances that are interrupted or that you
 *             terminate manually.</p>
 *          <p>If you are finished with your Spot Fleet for now, but will use it again later, you can set the
 *        target capacity to 0.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySpotFleetRequestCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySpotFleetRequestCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifySpotFleetRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySpotFleetRequestCommandInput} for command's `input` shape.
 * @see {@link ModifySpotFleetRequestCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifySpotFleetRequestCommand extends smithy_client_1.Command {
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
        const clientName = "EC2Client";
        const commandName = "ModifySpotFleetRequestCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifySpotFleetRequestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifySpotFleetRequestResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifySpotFleetRequestCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifySpotFleetRequestCommand(output, context);
    }
}
exports.ModifySpotFleetRequestCommand = ModifySpotFleetRequestCommand;
//# sourceMappingURL=ModifySpotFleetRequestCommand.js.map