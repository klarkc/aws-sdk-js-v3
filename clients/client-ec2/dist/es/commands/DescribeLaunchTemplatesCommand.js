import { __extends } from "tslib";
import { DescribeLaunchTemplatesRequest, DescribeLaunchTemplatesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeLaunchTemplatesCommand, serializeAws_ec2DescribeLaunchTemplatesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more launch templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLaunchTemplatesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLaunchTemplatesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLaunchTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLaunchTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchTemplatesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLaunchTemplatesCommand = /** @class */ (function (_super) {
    __extends(DescribeLaunchTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLaunchTemplatesCommand(input) {
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
    DescribeLaunchTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeLaunchTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLaunchTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLaunchTemplatesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLaunchTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeLaunchTemplatesCommand(input, context);
    };
    DescribeLaunchTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeLaunchTemplatesCommand(output, context);
    };
    return DescribeLaunchTemplatesCommand;
}($Command));
export { DescribeLaunchTemplatesCommand };
//# sourceMappingURL=DescribeLaunchTemplatesCommand.js.map