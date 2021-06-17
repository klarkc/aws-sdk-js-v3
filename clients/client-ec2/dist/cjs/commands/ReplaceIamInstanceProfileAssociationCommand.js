"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceIamInstanceProfileAssociationCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Replaces an IAM instance profile for the specified running instance. You can use
 *             this action to change the IAM instance profile that's associated with an instance
 *             without having to disassociate the existing IAM instance profile first.</p>
 *         <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceIamInstanceProfileAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceIamInstanceProfileAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceIamInstanceProfileAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceIamInstanceProfileAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceIamInstanceProfileAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ReplaceIamInstanceProfileAssociationCommand extends smithy_client_1.Command {
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
        const commandName = "ReplaceIamInstanceProfileAssociationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ReplaceIamInstanceProfileAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ReplaceIamInstanceProfileAssociationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ReplaceIamInstanceProfileAssociationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ReplaceIamInstanceProfileAssociationCommand(output, context);
    }
}
exports.ReplaceIamInstanceProfileAssociationCommand = ReplaceIamInstanceProfileAssociationCommand;
//# sourceMappingURL=ReplaceIamInstanceProfileAssociationCommand.js.map