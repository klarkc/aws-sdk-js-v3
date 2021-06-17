import { __extends } from "tslib";
import { CreateNetworkInsightsPathRequest, CreateNetworkInsightsPathResult } from "../models/models_1";
import { deserializeAws_ec2CreateNetworkInsightsPathCommand, serializeAws_ec2CreateNetworkInsightsPathCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a path to analyze for reachability.</p>
 *          <p>Reachability Analyzer enables you to analyze and debug network reachability between
 *           two resources in your virtual private cloud (VPC). For more information, see
 *           <a href="https://docs.aws.amazon.com/vpc/latest/reachability/">What is Reachability Analyzer</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInsightsPathCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInsightsPathCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkInsightsPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkInsightsPathCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInsightsPathCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNetworkInsightsPathCommand = /** @class */ (function (_super) {
    __extends(CreateNetworkInsightsPathCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNetworkInsightsPathCommand(input) {
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
    CreateNetworkInsightsPathCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateNetworkInsightsPathCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNetworkInsightsPathRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNetworkInsightsPathResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNetworkInsightsPathCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateNetworkInsightsPathCommand(input, context);
    };
    CreateNetworkInsightsPathCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateNetworkInsightsPathCommand(output, context);
    };
    return CreateNetworkInsightsPathCommand;
}($Command));
export { CreateNetworkInsightsPathCommand };
//# sourceMappingURL=CreateNetworkInsightsPathCommand.js.map