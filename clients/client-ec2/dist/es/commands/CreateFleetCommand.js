import { __extends } from "tslib";
import { CreateFleetRequest, CreateFleetResult } from "../models/models_0";
import { deserializeAws_ec2CreateFleetCommand, serializeAws_ec2CreateFleetCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Launches an EC2 Fleet.</p>
 *          <p>You can create a single EC2 Fleet that includes multiple launch specifications that vary by
 *          instance type, AMI, Availability Zone, or subnet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html">Launching an EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFleetCommand = /** @class */ (function (_super) {
    __extends(CreateFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFleetCommand(input) {
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
    CreateFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFleetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateFleetCommand(input, context);
    };
    CreateFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateFleetCommand(output, context);
    };
    return CreateFleetCommand;
}($Command));
export { CreateFleetCommand };
//# sourceMappingURL=CreateFleetCommand.js.map