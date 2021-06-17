import { __extends } from "tslib";
import { DeleteFpgaImageRequest, DeleteFpgaImageResult } from "../models/models_1";
import { deserializeAws_ec2DeleteFpgaImageCommand, serializeAws_ec2DeleteFpgaImageCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Amazon FPGA Image (AFI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFpgaImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFpgaImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteFpgaImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFpgaImageCommandInput} for command's `input` shape.
 * @see {@link DeleteFpgaImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFpgaImageCommand = /** @class */ (function (_super) {
    __extends(DeleteFpgaImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFpgaImageCommand(input) {
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
    DeleteFpgaImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteFpgaImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFpgaImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFpgaImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFpgaImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteFpgaImageCommand(input, context);
    };
    DeleteFpgaImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteFpgaImageCommand(output, context);
    };
    return DeleteFpgaImageCommand;
}($Command));
export { DeleteFpgaImageCommand };
//# sourceMappingURL=DeleteFpgaImageCommand.js.map