"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyImageCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Initiates the copy of an AMI. You can copy an AMI from one Region to another, or from a
 *       Region to an AWS Outpost. You can't copy an AMI from an Outpost to a Region, from one Outpost
 *       to another, or within the same Outpost. To copy an AMI to another partition, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html">CreateStoreImageTask</a>.</p>
 *
 *      	   <p>To copy an AMI from one Region to another, specify the source Region using the
 *      		<b>SourceRegion</b> parameter, and specify the
 *      		destination Region using its endpoint. Copies of encrypted backing snapshots for
 *      		the AMI are encrypted. Copies of unencrypted backing snapshots remain unencrypted,
 *      		unless you set <code>Encrypted</code> during the copy operation. You cannot
 *      		create an unencrypted copy of an encrypted backing snapshot.</p>
 *
 *    	     <p>To copy an AMI from a Region to an Outpost, specify the source Region using the
 *    		<b>SourceRegion</b> parameter, and specify the
 *    		ARN of the destination Outpost using <b>DestinationOutpostArn</b>.
 *    		Backing snapshots copied to an Outpost are encrypted by default using the default
 *    		encryption key for the Region, or a different key that you specify in the request using
 *    		<b>KmsKeyId</b>. Outposts do not support unencrypted
 *    		snapshots. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami">
 *    			Amazon EBS local snapshots on Outposts</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *
 *          <p>For more information about the prerequisites and limits when copying an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html">Copying an AMI</a>
 *         in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopyImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopyImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CopyImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyImageCommandInput} for command's `input` shape.
 * @see {@link CopyImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CopyImageCommand extends smithy_client_1.Command {
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
        const commandName = "CopyImageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CopyImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CopyImageResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CopyImageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CopyImageCommand(output, context);
    }
}
exports.CopyImageCommand = CopyImageCommand;
//# sourceMappingURL=CopyImageCommand.js.map