import { __extends } from "tslib";
import { DescribeLaunchTemplateVersionsRequest, DescribeLaunchTemplateVersionsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeLaunchTemplateVersionsCommand, serializeAws_ec2DescribeLaunchTemplateVersionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more versions of a specified launch template. You can describe all
 *             versions, individual versions, or a range of versions. You can also describe all the
 *             latest versions or all the default versions of all the launch templates in your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLaunchTemplateVersionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLaunchTemplateVersionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLaunchTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLaunchTemplateVersionsCommand = /** @class */ (function (_super) {
    __extends(DescribeLaunchTemplateVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLaunchTemplateVersionsCommand(input) {
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
    DescribeLaunchTemplateVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeLaunchTemplateVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLaunchTemplateVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLaunchTemplateVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLaunchTemplateVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeLaunchTemplateVersionsCommand(input, context);
    };
    DescribeLaunchTemplateVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeLaunchTemplateVersionsCommand(output, context);
    };
    return DescribeLaunchTemplateVersionsCommand;
}($Command));
export { DescribeLaunchTemplateVersionsCommand };
//# sourceMappingURL=DescribeLaunchTemplateVersionsCommand.js.map