"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyDefaultCreditSpecificationCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the default credit option for CPU usage of burstable performance instances.
 *             The default credit option is set at the account level per AWS Region, and is specified
 *             per instance family. All new burstable performance instances in the account launch using
 *             the default credit option.</p>
 *         <p>
 *             <code>ModifyDefaultCreditSpecification</code> is an asynchronous operation, which works at an AWS
 *             Region level and modifies the credit option for each Availability Zone. All zones in a
 *             Region are updated within five minutes. But if instances are launched during this
 *             operation, they might not get the new credit option until the zone is updated. To verify
 *             whether the update has occurred, you can call <code>GetDefaultCreditSpecification</code> and check
 *             <code>DefaultCreditSpecification</code> for updates.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *             performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyDefaultCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyDefaultCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyDefaultCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDefaultCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link ModifyDefaultCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyDefaultCreditSpecificationCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyDefaultCreditSpecificationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyDefaultCreditSpecificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyDefaultCreditSpecificationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyDefaultCreditSpecificationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyDefaultCreditSpecificationCommand(output, context);
    }
}
exports.ModifyDefaultCreditSpecificationCommand = ModifyDefaultCreditSpecificationCommand;
//# sourceMappingURL=ModifyDefaultCreditSpecificationCommand.js.map