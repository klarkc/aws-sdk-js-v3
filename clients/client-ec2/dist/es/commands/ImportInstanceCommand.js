import { __extends } from "tslib";
import { ImportInstanceRequest, ImportInstanceResult } from "../models/models_4";
import { deserializeAws_ec2ImportInstanceCommand, serializeAws_ec2ImportInstanceCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an import instance task using metadata from the specified disk image.</p>
 *          <p>This API action supports only single-volume VMs. To import multi-volume VMs, use <a>ImportImage</a>
 *    instead.</p>
 *          <p>This API action is not supported by the AWS Command Line Interface (AWS CLI). For
 *    information about using the Amazon EC2 CLI, which is deprecated, see
 *    <a href="https://awsdocs.s3.amazonaws.com/EC2/ec2-clt.pdf#UsingVirtualMachinesinAmazonEC2">Importing a VM to Amazon EC2</a> in the <i>Amazon EC2 CLI Reference</i> PDF file.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportInstanceCommandInput} for command's `input` shape.
 * @see {@link ImportInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportInstanceCommand = /** @class */ (function (_super) {
    __extends(ImportInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportInstanceCommand(input) {
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
    ImportInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ImportInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ImportInstanceCommand(input, context);
    };
    ImportInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ImportInstanceCommand(output, context);
    };
    return ImportInstanceCommand;
}($Command));
export { ImportInstanceCommand };
//# sourceMappingURL=ImportInstanceCommand.js.map