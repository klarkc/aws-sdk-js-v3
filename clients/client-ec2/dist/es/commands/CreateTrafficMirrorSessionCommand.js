import { __extends } from "tslib";
import { CreateTrafficMirrorSessionRequest, CreateTrafficMirrorSessionResult } from "../models/models_1";
import { deserializeAws_ec2CreateTrafficMirrorSessionCommand, serializeAws_ec2CreateTrafficMirrorSessionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Traffic Mirror session.</p>
 *          <p>A Traffic Mirror session actively copies packets from a Traffic Mirror source to a Traffic Mirror target. Create a filter, and then assign it
 *          to the session to define a subset of the traffic to mirror, for example all TCP
 *          traffic.</p>
 *          <p>The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in a different VPC connected via VPC peering or a transit gateway. </p>
 *          <p>By default, no traffic is mirrored. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilter.htm">CreateTrafficMirrorFilter</a> to
 *          create filter rules that specify the traffic to mirror.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorSessionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorSessionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTrafficMirrorSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficMirrorSessionCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorSessionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrafficMirrorSessionCommand = /** @class */ (function (_super) {
    __extends(CreateTrafficMirrorSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrafficMirrorSessionCommand(input) {
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
    CreateTrafficMirrorSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTrafficMirrorSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrafficMirrorSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrafficMirrorSessionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrafficMirrorSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTrafficMirrorSessionCommand(input, context);
    };
    CreateTrafficMirrorSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTrafficMirrorSessionCommand(output, context);
    };
    return CreateTrafficMirrorSessionCommand;
}($Command));
export { CreateTrafficMirrorSessionCommand };
//# sourceMappingURL=CreateTrafficMirrorSessionCommand.js.map