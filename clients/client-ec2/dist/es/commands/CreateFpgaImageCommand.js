import { __extends } from "tslib";
import { CreateFpgaImageRequest, CreateFpgaImageResult } from "../models/models_0";
import { deserializeAws_ec2CreateFpgaImageCommand, serializeAws_ec2CreateFpgaImageCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon FPGA Image (AFI) from the specified design checkpoint (DCP).</p>
 *          <p>The create operation is asynchronous. To verify that the AFI is ready for use,
 *          check the output logs.</p>
 *          <p>An AFI contains the FPGA bitstream that is ready to download to an FPGA.
 *          You can securely deploy an AFI on multiple FPGA-accelerated instances.
 *          For more information, see the <a href="https://github.com/aws/aws-fpga/">AWS FPGA Hardware Development Kit</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateFpgaImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateFpgaImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateFpgaImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFpgaImageCommandInput} for command's `input` shape.
 * @see {@link CreateFpgaImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFpgaImageCommand = /** @class */ (function (_super) {
    __extends(CreateFpgaImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFpgaImageCommand(input) {
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
    CreateFpgaImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateFpgaImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFpgaImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFpgaImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFpgaImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateFpgaImageCommand(input, context);
    };
    CreateFpgaImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateFpgaImageCommand(output, context);
    };
    return CreateFpgaImageCommand;
}($Command));
export { CreateFpgaImageCommand };
//# sourceMappingURL=CreateFpgaImageCommand.js.map