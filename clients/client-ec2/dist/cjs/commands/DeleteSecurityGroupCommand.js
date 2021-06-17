"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSecurityGroupCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a security group.</p>
 *          <p>If you attempt to delete a security group that is associated with an instance, or is
 * 			  referenced by another security group, the operation fails with
 * 				<code>InvalidGroup.InUse</code> in EC2-Classic or
 * 				<code>DependencyViolation</code> in EC2-VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSecurityGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSecurityGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteSecurityGroupCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteSecurityGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DeleteSecurityGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DeleteSecurityGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DeleteSecurityGroupCommand(output, context);
    }
}
exports.DeleteSecurityGroupCommand = DeleteSecurityGroupCommand;
//# sourceMappingURL=DeleteSecurityGroupCommand.js.map