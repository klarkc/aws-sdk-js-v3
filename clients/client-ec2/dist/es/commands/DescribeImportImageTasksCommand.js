import { __extends } from "tslib";
import { DescribeImportImageTasksRequest, DescribeImportImageTasksResult } from "../models/models_2";
import { deserializeAws_ec2DescribeImportImageTasksCommand, serializeAws_ec2DescribeImportImageTasksCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays details about an import virtual machine or import snapshot tasks that are already created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImportImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImportImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeImportImageTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImportImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImportImageTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeImportImageTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeImportImageTasksCommand(input) {
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
    DescribeImportImageTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeImportImageTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeImportImageTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeImportImageTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeImportImageTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeImportImageTasksCommand(input, context);
    };
    DescribeImportImageTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeImportImageTasksCommand(output, context);
    };
    return DescribeImportImageTasksCommand;
}($Command));
export { DescribeImportImageTasksCommand };
//# sourceMappingURL=DescribeImportImageTasksCommand.js.map