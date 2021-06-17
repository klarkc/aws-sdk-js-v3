"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlacementGroupCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a placement group in which to launch instances. The strategy of the placement
 *             group determines how the instances are organized within the group. </p>
 *         <p>A <code>cluster</code> placement group is a logical grouping of instances within a
 *             single Availability Zone that benefit from low network latency, high network throughput.
 *             A <code>spread</code> placement group places instances on distinct hardware. A
 *                 <code>partition</code> placement group places groups of instances in different
 *             partitions, where instances in one partition do not share the same hardware with
 *             instances in another partition.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreatePlacementGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreatePlacementGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreatePlacementGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlacementGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePlacementGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreatePlacementGroupCommand extends smithy_client_1.Command {
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
        const commandName = "CreatePlacementGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreatePlacementGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreatePlacementGroupResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreatePlacementGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreatePlacementGroupCommand(output, context);
    }
}
exports.CreatePlacementGroupCommand = CreatePlacementGroupCommand;
//# sourceMappingURL=CreatePlacementGroupCommand.js.map