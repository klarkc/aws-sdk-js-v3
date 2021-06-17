import { __extends } from "tslib";
import { ExportImageRequest, ExportImageResult } from "../models/models_4";
import { deserializeAws_ec2ExportImageCommand, serializeAws_ec2ExportImageCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports an Amazon Machine Image (AMI) to a VM file. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html">Exporting a VM
 *     directly from an Amazon Machine Image (AMI)</a> in the
 *     <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportImageCommandInput} for command's `input` shape.
 * @see {@link ExportImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportImageCommand = /** @class */ (function (_super) {
    __extends(ExportImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportImageCommand(input) {
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
    ExportImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ExportImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ExportImageCommand(input, context);
    };
    ExportImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ExportImageCommand(output, context);
    };
    return ExportImageCommand;
}($Command));
export { ExportImageCommand };
//# sourceMappingURL=ExportImageCommand.js.map