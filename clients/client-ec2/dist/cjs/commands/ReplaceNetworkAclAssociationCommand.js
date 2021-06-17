"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceNetworkAclAssociationCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Changes which network ACL a subnet is associated with. By default when you create a
 * 			subnet, it's automatically associated with the default network ACL. For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network
 * 			ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *         <p>This is an idempotent operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceNetworkAclAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceNetworkAclAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceNetworkAclAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceNetworkAclAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceNetworkAclAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ReplaceNetworkAclAssociationCommand extends smithy_client_1.Command {
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
        const commandName = "ReplaceNetworkAclAssociationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ReplaceNetworkAclAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ReplaceNetworkAclAssociationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ReplaceNetworkAclAssociationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ReplaceNetworkAclAssociationCommand(output, context);
    }
}
exports.ReplaceNetworkAclAssociationCommand = ReplaceNetworkAclAssociationCommand;
//# sourceMappingURL=ReplaceNetworkAclAssociationCommand.js.map