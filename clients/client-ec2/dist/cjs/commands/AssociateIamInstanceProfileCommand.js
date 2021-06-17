"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateIamInstanceProfileCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associates an IAM instance profile with a running or stopped instance. You cannot
 *             associate more than one IAM instance profile with an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateIamInstanceProfileCommand extends smithy_client_1.Command {
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
        const commandName = "AssociateIamInstanceProfileCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateIamInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateIamInstanceProfileResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2AssociateIamInstanceProfileCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2AssociateIamInstanceProfileCommand(output, context);
    }
}
exports.AssociateIamInstanceProfileCommand = AssociateIamInstanceProfileCommand;
//# sourceMappingURL=AssociateIamInstanceProfileCommand.js.map