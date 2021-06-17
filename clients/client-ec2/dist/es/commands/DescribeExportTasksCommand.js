import { __extends } from "tslib";
import { DescribeExportTasksRequest, DescribeExportTasksResult } from "../models/models_2";
import { deserializeAws_ec2DescribeExportTasksCommand, serializeAws_ec2DescribeExportTasksCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified export instance tasks or all of your export instance tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeExportTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeExportTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeExportTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeExportTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeExportTasksCommand(input) {
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
    DescribeExportTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeExportTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeExportTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeExportTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeExportTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeExportTasksCommand(input, context);
    };
    DescribeExportTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeExportTasksCommand(output, context);
    };
    return DescribeExportTasksCommand;
}($Command));
export { DescribeExportTasksCommand };
//# sourceMappingURL=DescribeExportTasksCommand.js.map