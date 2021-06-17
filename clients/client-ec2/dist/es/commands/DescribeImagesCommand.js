import { __extends } from "tslib";
import { DescribeImagesRequest, DescribeImagesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeImagesCommand, serializeAws_ec2DescribeImagesCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeImagesCommand = /** @class */ (function (_super) {
    __extends(DescribeImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeImagesCommand(input) {
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
    DescribeImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeImagesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeImagesCommand(input, context);
    };
    DescribeImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeImagesCommand(output, context);
    };
    return DescribeImagesCommand;
}($Command));
export { DescribeImagesCommand };
//# sourceMappingURL=DescribeImagesCommand.js.map