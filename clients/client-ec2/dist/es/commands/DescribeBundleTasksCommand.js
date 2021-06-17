import { __extends } from "tslib";
import { DescribeBundleTasksRequest, DescribeBundleTasksResult } from "../models/models_2";
import { deserializeAws_ec2DescribeBundleTasksCommand, serializeAws_ec2DescribeBundleTasksCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified bundle tasks or all of your bundle tasks.</p>
 *          <note>
 *             <p>Completed bundle tasks are listed for only a limited time. If your bundle task is no longer in the list, you can still register an AMI from it. Just use <code>RegisterImage</code> with the Amazon S3 bucket name and image manifest name you provided to the bundle task.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeBundleTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeBundleTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeBundleTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBundleTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBundleTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeBundleTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBundleTasksCommand(input) {
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
    DescribeBundleTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeBundleTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBundleTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBundleTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBundleTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeBundleTasksCommand(input, context);
    };
    DescribeBundleTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeBundleTasksCommand(output, context);
    };
    return DescribeBundleTasksCommand;
}($Command));
export { DescribeBundleTasksCommand };
//# sourceMappingURL=DescribeBundleTasksCommand.js.map