import { __extends } from "tslib";
import { CreateTrafficMirrorTargetRequest, CreateTrafficMirrorTargetResult } from "../models/models_1";
import { deserializeAws_ec2CreateTrafficMirrorTargetCommand, serializeAws_ec2CreateTrafficMirrorTargetCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a target for your Traffic Mirror session.</p>
 *          <p>A Traffic Mirror target is the destination for mirrored traffic. The Traffic Mirror source and
 *          the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in
 *          different VPCs connected via VPC peering or a transit gateway.</p>
 *          <p>A Traffic Mirror target can be a network interface, or a Network Load Balancer.</p>
 *          <p>To use the target in a Traffic Mirror session, use  <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.htm">CreateTrafficMirrorSession</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTrafficMirrorTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficMirrorTargetCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrafficMirrorTargetCommand = /** @class */ (function (_super) {
    __extends(CreateTrafficMirrorTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrafficMirrorTargetCommand(input) {
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
    CreateTrafficMirrorTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTrafficMirrorTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrafficMirrorTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrafficMirrorTargetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrafficMirrorTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTrafficMirrorTargetCommand(input, context);
    };
    CreateTrafficMirrorTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTrafficMirrorTargetCommand(output, context);
    };
    return CreateTrafficMirrorTargetCommand;
}($Command));
export { CreateTrafficMirrorTargetCommand };
//# sourceMappingURL=CreateTrafficMirrorTargetCommand.js.map