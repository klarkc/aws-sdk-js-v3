"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetInstanceAttributeCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Resets an attribute of an instance to its default value. To reset the
 *                 <code>kernel</code> or <code>ramdisk</code>, the instance must be in a stopped
 *             state. To reset the <code>sourceDestCheck</code>, the instance can be either running or
 *             stopped.</p>
 *         <p>The <code>sourceDestCheck</code> attribute controls whether source/destination
 *             checking is enabled. The default value is <code>true</code>, which means checking is
 *             enabled. This value must be <code>false</code> for a NAT instance to perform NAT. For
 *             more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT Instances</a> in the
 *                 <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResetInstanceAttributeCommand extends smithy_client_1.Command {
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
        const commandName = "ResetInstanceAttributeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.ResetInstanceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ResetInstanceAttributeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ResetInstanceAttributeCommand(output, context);
    }
}
exports.ResetInstanceAttributeCommand = ResetInstanceAttributeCommand;
//# sourceMappingURL=ResetInstanceAttributeCommand.js.map