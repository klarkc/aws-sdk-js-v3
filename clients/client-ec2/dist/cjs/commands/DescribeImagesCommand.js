"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeImagesCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you.</p>
 *          <p>The images available to you include public images, private images that you own, and private images owned by other AWS accounts for which you have explicit launch permissions.</p>
 *          <p>Recently deregistered images appear in the returned results for a short interval and then return empty results.
 *         After all instances that reference a deregistered AMI are terminated, specifying the ID of the image results
 *         in an error indicating that the AMI ID cannot be found.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeImagesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeImagesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DescribeImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DescribeImagesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeImagesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeImagesCommand(output, context);
    }
}
exports.DescribeImagesCommand = DescribeImagesCommand;
//# sourceMappingURL=DescribeImagesCommand.js.map