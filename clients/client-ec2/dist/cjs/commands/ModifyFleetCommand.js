"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyFleetCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the specified EC2 Fleet.</p>
 *          <p>You can only modify an EC2 Fleet request of type <code>maintain</code>.</p>
 *          <p>While the EC2 Fleet is being modified, it is in the <code>modifying</code> state.</p>
 *          <p>To scale up your EC2 Fleet, increase its target capacity. The EC2 Fleet launches the additional
 *          Spot Instances according to the allocation strategy for the EC2 Fleet request. If the allocation
 *          strategy is <code>lowest-price</code>, the EC2 Fleet launches instances using the Spot Instance
 *          pool with the lowest price. If the allocation strategy is <code>diversified</code>, the
 *          EC2 Fleet distributes the instances across the Spot Instance pools. If the allocation strategy
 *          is <code>capacity-optimized</code>, EC2 Fleet launches instances from Spot Instance pools with optimal
 *          capacity for the number of instances that are launching.</p>
 *          <p>To scale down your EC2 Fleet, decrease its target capacity. First, the EC2 Fleet cancels any open
 *          requests that exceed the new target capacity. You can request that the EC2 Fleet terminate Spot
 *          Instances until the size of the fleet no longer exceeds the new target capacity. If the
 *          allocation strategy is <code>lowest-price</code>, the EC2 Fleet terminates the instances with
 *          the highest price per unit. If the allocation strategy is <code>capacity-optimized</code>,
 *          the EC2 Fleet terminates the instances in the Spot Instance pools that have the least available
 *          Spot Instance capacity. If the allocation strategy is <code>diversified</code>, the EC2 Fleet terminates
 *          instances across the Spot Instance pools. Alternatively, you can request that the EC2 Fleet keep
 *          the fleet at its current size, but not replace any Spot Instances that are interrupted or
 *          that you terminate manually.</p>
 *          <p>If you are finished with your EC2 Fleet for now, but will use it again later, you can set the
 *          target capacity to 0.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyFleetCommandInput} for command's `input` shape.
 * @see {@link ModifyFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyFleetCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyFleetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyFleetResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyFleetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyFleetCommand(output, context);
    }
}
exports.ModifyFleetCommand = ModifyFleetCommand;
//# sourceMappingURL=ModifyFleetCommand.js.map