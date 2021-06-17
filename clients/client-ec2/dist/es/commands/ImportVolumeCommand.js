import { __extends } from "tslib";
import { ImportVolumeRequest, ImportVolumeResult } from "../models/models_4";
import { deserializeAws_ec2ImportVolumeCommand, serializeAws_ec2ImportVolumeCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an import volume task using metadata from the specified disk image.</p>
 *          <p>This API action supports only single-volume VMs. To import multi-volume VMs, use
 *    <a>ImportImage</a> instead. To import a disk to a snapshot, use
 *    <a>ImportSnapshot</a> instead.</p>
 *          <p>This API action is not supported by the AWS Command Line Interface (AWS CLI). For
 *    information about using the Amazon EC2 CLI, which is deprecated, see <a href="https://awsdocs.s3.amazonaws.com/EC2/ec2-clt.pdf#importing-your-volumes-into-amazon-ebs">Importing Disks to Amazon EBS</a> in the <i>Amazon EC2 CLI Reference</i> PDF file.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportVolumeCommandInput} for command's `input` shape.
 * @see {@link ImportVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportVolumeCommand = /** @class */ (function (_super) {
    __extends(ImportVolumeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportVolumeCommand(input) {
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
    ImportVolumeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ImportVolumeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportVolumeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportVolumeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportVolumeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ImportVolumeCommand(input, context);
    };
    ImportVolumeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ImportVolumeCommand(output, context);
    };
    return ImportVolumeCommand;
}($Command));
export { ImportVolumeCommand };
//# sourceMappingURL=ImportVolumeCommand.js.map