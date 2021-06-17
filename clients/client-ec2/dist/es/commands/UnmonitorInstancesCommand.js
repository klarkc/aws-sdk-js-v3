import { __extends } from "tslib";
import { UnmonitorInstancesRequest, UnmonitorInstancesResult } from "../models/models_5";
import { deserializeAws_ec2UnmonitorInstancesCommand, serializeAws_ec2UnmonitorInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables detailed monitoring for a running instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring
 *             your instances and volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnmonitorInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnmonitorInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnmonitorInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnmonitorInstancesCommandInput} for command's `input` shape.
 * @see {@link UnmonitorInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnmonitorInstancesCommand = /** @class */ (function (_super) {
    __extends(UnmonitorInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnmonitorInstancesCommand(input) {
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
    UnmonitorInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "UnmonitorInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnmonitorInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UnmonitorInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnmonitorInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2UnmonitorInstancesCommand(input, context);
    };
    UnmonitorInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2UnmonitorInstancesCommand(output, context);
    };
    return UnmonitorInstancesCommand;
}($Command));
export { UnmonitorInstancesCommand };
//# sourceMappingURL=UnmonitorInstancesCommand.js.map