import { __extends } from "tslib";
import { RegisterImageRequest, RegisterImageResult } from "../models/models_4";
import { deserializeAws_ec2RegisterImageCommand, serializeAws_ec2RegisterImageCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers an AMI. When you're creating an AMI, this is the final step you must complete
 *       before you can launch an instance from the AMI. For more information about creating AMIs, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami.html">Creating your
 *         own AMIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <note>
 *             <p>For Amazon EBS-backed instances, <a>CreateImage</a> creates and registers
 *          	the AMI in a single request, so you don't have to register the AMI yourself.</p>
 *          </note>
 *
 *          <p>If needed, you can deregister an AMI at any time. Any modifications you make to an AMI backed by an instance store volume invalidates its registration.
 *        If you make changes to an image, deregister the previous image and register the new image.</p>
 *
 *          <p>
 *             <b>Register a snapshot of a root device volume</b>
 *          </p>
 *          <p>You can use <code>RegisterImage</code> to create an Amazon EBS-backed Linux AMI from
 *        a snapshot of a root device volume. You specify the snapshot using a block device mapping.
 *        You can't set the encryption state of the volume using the block device mapping. If the
 *        snapshot is encrypted, or encryption by default is enabled, the root volume of an instance
 *        launched from the AMI is encrypted.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html#creating-launching-ami-from-snapshot">Create a Linux AMI from a snapshot</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html">Use encryption with EBS-backed AMIs</a>
 *        in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *
 *          <p>
 *             <b>AWS Marketplace product codes</b>
 *          </p>
 *          <p>If any snapshots have AWS Marketplace product codes, they are copied to the new
 *       AMI.</p>
 *          <p>Windows and some Linux distributions, such as Red Hat Enterprise Linux (RHEL) and SUSE
 *       Linux Enterprise Server (SLES), use the EC2 billing product code associated with an AMI to
 *       verify the subscription status for package updates. To create a new AMI for operating systems
 *       that require a billing product code, instead of registering the AMI, do the following to
 *       preserve the billing product code association:</p>
 *          <ol>
 *             <li>
 *                <p>Launch an instance from an existing AMI with that billing product code.</p>
 *             </li>
 *             <li>
 *                <p>Customize the instance.</p>
 *             </li>
 *             <li>
 *                <p>Create an AMI from the instance using <a>CreateImage</a>.</p>
 *             </li>
 *          </ol>
 *          <p>If you purchase a Reserved Instance to apply to an On-Demand Instance that was launched
 *       from an AMI with a billing product code, make sure that the Reserved Instance has the matching
 *       billing product code. If you purchase a Reserved Instance without the matching billing product
 *       code, the Reserved Instance will not be applied to the On-Demand Instance. For information
 *       about how to obtain the platform details and billing information of an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Obtaining billing
 *         information</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RegisterImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterImageCommandInput} for command's `input` shape.
 * @see {@link RegisterImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterImageCommand = /** @class */ (function (_super) {
    __extends(RegisterImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterImageCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    RegisterImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RegisterImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RegisterImageCommand(input, context);
    };
    RegisterImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RegisterImageCommand(output, context);
    };
    return RegisterImageCommand;
}($Command));
export { RegisterImageCommand };
//# sourceMappingURL=RegisterImageCommand.js.map