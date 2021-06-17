"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyInstancePlacementCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the placement attributes for a specified instance. You can do the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>Modify the affinity between an instance and a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated
 *                         Host</a>. When affinity is set to <code>host</code> and the instance is
 *                     not associated with a specific Dedicated Host, the next time the instance is
 *                     launched, it is automatically associated with the host on which it lands. If the
 *                     instance is restarted or rebooted, this relationship persists.</p>
 *             </li>
 *             <li>
 *                 <p>Change the Dedicated Host with which an instance is associated.</p>
 *             </li>
 *             <li>
 *                 <p>Change the instance tenancy of an instance from <code>host</code> to
 *                         <code>dedicated</code>, or from <code>dedicated</code> to
 *                     <code>host</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Move an instance to or from a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">placement
 *                     group</a>.</p>
 *             </li>
 *          </ul>
 *         <p>At least one attribute for affinity, host ID, tenancy, or placement group name must
 *             be specified in the request. Affinity and tenancy can be modified in the same
 *             request.</p>
 *         <p>To modify the host ID, tenancy, placement group, or partition for an instance, the
 *             instance must be in the <code>stopped</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstancePlacementCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstancePlacementCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstancePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstancePlacementCommandInput} for command's `input` shape.
 * @see {@link ModifyInstancePlacementCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyInstancePlacementCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyInstancePlacementCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyInstancePlacementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyInstancePlacementResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyInstancePlacementCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyInstancePlacementCommand(output, context);
    }
}
exports.ModifyInstancePlacementCommand = ModifyInstancePlacementCommand;
//# sourceMappingURL=ModifyInstancePlacementCommand.js.map