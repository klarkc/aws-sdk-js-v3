import { __extends } from "tslib";
import { DescribeExportTasksMessage, ExportTasksMessage } from "../models/models_1";
import { deserializeAws_queryDescribeExportTasksCommand, serializeAws_queryDescribeExportTasksCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a snapshot export to Amazon S3. This API operation supports
 *             pagination. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeExportTasksCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeExportTasksCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportTasksCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "RDSClient";
        var commandName = "DescribeExportTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeExportTasksMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ExportTasksMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeExportTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeExportTasksCommand(input, context);
    };
    DescribeExportTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeExportTasksCommand(output, context);
    };
    return DescribeExportTasksCommand;
}($Command));
export { DescribeExportTasksCommand };
//# sourceMappingURL=DescribeExportTasksCommand.js.map