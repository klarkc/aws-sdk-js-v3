import { __extends } from "tslib";
import { CreateDefaultSubnetRequest, CreateDefaultSubnetResult } from "../models/models_0";
import { deserializeAws_ec2CreateDefaultSubnetCommand, serializeAws_ec2CreateDefaultSubnetCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a default subnet with a size <code>/20</code> IPv4 CIDR block in the
 *             specified Availability Zone in your default VPC. You can have only one default subnet
 *             per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-subnet">Creating a Default
 *                 Subnet</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDefaultSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDefaultSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateDefaultSubnetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDefaultSubnetCommandInput} for command's `input` shape.
 * @see {@link CreateDefaultSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDefaultSubnetCommand = /** @class */ (function (_super) {
    __extends(CreateDefaultSubnetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDefaultSubnetCommand(input) {
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
    CreateDefaultSubnetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateDefaultSubnetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDefaultSubnetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDefaultSubnetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDefaultSubnetCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateDefaultSubnetCommand(input, context);
    };
    CreateDefaultSubnetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateDefaultSubnetCommand(output, context);
    };
    return CreateDefaultSubnetCommand;
}($Command));
export { CreateDefaultSubnetCommand };
//# sourceMappingURL=CreateDefaultSubnetCommand.js.map