import { __extends } from "tslib";
import { DescribeFleetsRequest, DescribeFleetsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeFleetsCommand, serializeAws_ec2DescribeFleetsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified EC2 Fleets or all of your EC2 Fleets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html#monitor-ec2-fleet">Monitoring your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetsCommand = /** @class */ (function (_super) {
    __extends(DescribeFleetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFleetsCommand(input) {
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
    DescribeFleetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeFleetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFleetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFleetsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFleetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeFleetsCommand(input, context);
    };
    DescribeFleetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeFleetsCommand(output, context);
    };
    return DescribeFleetsCommand;
}($Command));
export { DescribeFleetsCommand };
//# sourceMappingURL=DescribeFleetsCommand.js.map