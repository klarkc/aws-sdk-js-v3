import { __extends } from "tslib";
import { RestoreAddressToClassicRequest, RestoreAddressToClassicResult } from "../models/models_5";
import { deserializeAws_ec2RestoreAddressToClassicCommand, serializeAws_ec2RestoreAddressToClassicCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreAddressToClassicCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreAddressToClassicCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RestoreAddressToClassicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreAddressToClassicCommandInput} for command's `input` shape.
 * @see {@link RestoreAddressToClassicCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreAddressToClassicCommand = /** @class */ (function (_super) {
    __extends(RestoreAddressToClassicCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreAddressToClassicCommand(input) {
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
    RestoreAddressToClassicCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RestoreAddressToClassicCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreAddressToClassicRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreAddressToClassicResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreAddressToClassicCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RestoreAddressToClassicCommand(input, context);
    };
    RestoreAddressToClassicCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RestoreAddressToClassicCommand(output, context);
    };
    return RestoreAddressToClassicCommand;
}($Command));
export { RestoreAddressToClassicCommand };
//# sourceMappingURL=RestoreAddressToClassicCommand.js.map