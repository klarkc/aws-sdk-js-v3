import { __extends } from "tslib";
import { CreateTrafficMirrorFilterRequest, CreateTrafficMirrorFilterResult } from "../models/models_1";
import { deserializeAws_ec2CreateTrafficMirrorFilterCommand, serializeAws_ec2CreateTrafficMirrorFilterCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Traffic Mirror filter.</p>
 *          <p>A Traffic Mirror filter is a set of rules that defines the traffic to mirror.</p>
 *          <p>By default, no traffic is mirrored. To mirror traffic, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.htm">CreateTrafficMirrorFilterRule</a> to add Traffic Mirror rules to the filter. The rules you
 *          add define what traffic gets mirrored. You can also use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterNetworkServices.html">ModifyTrafficMirrorFilterNetworkServices</a> to mirror supported network services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorFilterCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorFilterCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTrafficMirrorFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficMirrorFilterCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorFilterCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrafficMirrorFilterCommand = /** @class */ (function (_super) {
    __extends(CreateTrafficMirrorFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrafficMirrorFilterCommand(input) {
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
    CreateTrafficMirrorFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTrafficMirrorFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrafficMirrorFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrafficMirrorFilterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrafficMirrorFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTrafficMirrorFilterCommand(input, context);
    };
    CreateTrafficMirrorFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTrafficMirrorFilterCommand(output, context);
    };
    return CreateTrafficMirrorFilterCommand;
}($Command));
export { CreateTrafficMirrorFilterCommand };
//# sourceMappingURL=CreateTrafficMirrorFilterCommand.js.map