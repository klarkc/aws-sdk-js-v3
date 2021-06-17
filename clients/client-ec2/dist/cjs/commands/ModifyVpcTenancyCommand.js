"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyVpcTenancyCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the instance tenancy attribute of the specified VPC. You can change the
 *             instance tenancy attribute of a VPC to <code>default</code> only. You cannot change the
 *             instance tenancy attribute to <code>dedicated</code>.</p>
 *         <p>After you modify the tenancy of the VPC, any new instances that you launch into the
 *             VPC have a tenancy of <code>default</code>, unless you specify otherwise during launch.
 *             The tenancy of any existing instances in the VPC is not affected.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcTenancyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcTenancyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcTenancyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcTenancyCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcTenancyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyVpcTenancyCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyVpcTenancyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyVpcTenancyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyVpcTenancyResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyVpcTenancyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyVpcTenancyCommand(output, context);
    }
}
exports.ModifyVpcTenancyCommand = ModifyVpcTenancyCommand;
//# sourceMappingURL=ModifyVpcTenancyCommand.js.map