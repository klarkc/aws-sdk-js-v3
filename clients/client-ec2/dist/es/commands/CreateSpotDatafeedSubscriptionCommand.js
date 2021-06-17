import { __extends } from "tslib";
import { CreateSpotDatafeedSubscriptionRequest, CreateSpotDatafeedSubscriptionResult } from "../models/models_1";
import { deserializeAws_ec2CreateSpotDatafeedSubscriptionCommand, serializeAws_ec2CreateSpotDatafeedSubscriptionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a data feed for Spot Instances, enabling you to view Spot Instance usage logs.
 * 				You can create one data feed per AWS account. For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance data feed</a>
 *         in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSpotDatafeedSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSpotDatafeedSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSpotDatafeedSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateSpotDatafeedSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSpotDatafeedSubscriptionCommand = /** @class */ (function (_super) {
    __extends(CreateSpotDatafeedSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSpotDatafeedSubscriptionCommand(input) {
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
    CreateSpotDatafeedSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateSpotDatafeedSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSpotDatafeedSubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSpotDatafeedSubscriptionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSpotDatafeedSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateSpotDatafeedSubscriptionCommand(input, context);
    };
    CreateSpotDatafeedSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateSpotDatafeedSubscriptionCommand(output, context);
    };
    return CreateSpotDatafeedSubscriptionCommand;
}($Command));
export { CreateSpotDatafeedSubscriptionCommand };
//# sourceMappingURL=CreateSpotDatafeedSubscriptionCommand.js.map