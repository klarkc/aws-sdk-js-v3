import { __extends } from "tslib";
import { DescribeExportImageTasksRequest, DescribeExportImageTasksResult } from "../models/models_2";
import { deserializeAws_ec2DescribeExportImageTasksCommand, serializeAws_ec2DescribeExportImageTasksCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified export image tasks or all of your export image tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeExportImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeExportImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeExportImageTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeExportImageTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeExportImageTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeExportImageTasksCommand(input) {
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
    DescribeExportImageTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeExportImageTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeExportImageTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeExportImageTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeExportImageTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeExportImageTasksCommand(input, context);
    };
    DescribeExportImageTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeExportImageTasksCommand(output, context);
    };
    return DescribeExportImageTasksCommand;
}($Command));
export { DescribeExportImageTasksCommand };
//# sourceMappingURL=DescribeExportImageTasksCommand.js.map