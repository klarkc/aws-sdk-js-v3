import { __extends } from "tslib";
import { DescribeFpgaImagesRequest, DescribeFpgaImagesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeFpgaImagesCommand, serializeAws_ec2DescribeFpgaImagesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs,
 * 			private AFIs that you own, and AFIs owned by other AWS accounts for which you have load
 * 			permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFpgaImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFpgaImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFpgaImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFpgaImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeFpgaImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFpgaImagesCommand = /** @class */ (function (_super) {
    __extends(DescribeFpgaImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFpgaImagesCommand(input) {
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
    DescribeFpgaImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeFpgaImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFpgaImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFpgaImagesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFpgaImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeFpgaImagesCommand(input, context);
    };
    DescribeFpgaImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeFpgaImagesCommand(output, context);
    };
    return DescribeFpgaImagesCommand;
}($Command));
export { DescribeFpgaImagesCommand };
//# sourceMappingURL=DescribeFpgaImagesCommand.js.map