import { __extends } from "tslib";
import { CopyFpgaImageRequest, CopyFpgaImageResult } from "../models/models_0";
import { deserializeAws_ec2CopyFpgaImageCommand, serializeAws_ec2CopyFpgaImageCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies the specified Amazon FPGA Image (AFI) to the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopyFpgaImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopyFpgaImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CopyFpgaImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyFpgaImageCommandInput} for command's `input` shape.
 * @see {@link CopyFpgaImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyFpgaImageCommand = /** @class */ (function (_super) {
    __extends(CopyFpgaImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyFpgaImageCommand(input) {
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
    CopyFpgaImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CopyFpgaImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyFpgaImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CopyFpgaImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyFpgaImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CopyFpgaImageCommand(input, context);
    };
    CopyFpgaImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CopyFpgaImageCommand(output, context);
    };
    return CopyFpgaImageCommand;
}($Command));
export { CopyFpgaImageCommand };
//# sourceMappingURL=CopyFpgaImageCommand.js.map