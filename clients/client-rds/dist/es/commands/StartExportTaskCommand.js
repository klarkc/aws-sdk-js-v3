import { __extends } from "tslib";
import { ExportTask } from "../models/models_0";
import { StartExportTaskMessage } from "../models/models_1";
import { deserializeAws_queryStartExportTaskCommand, serializeAws_queryStartExportTaskCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an export of a snapshot to Amazon S3.
 *             The provided IAM role must have access to the S3 bucket.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartExportTaskCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartExportTaskCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartExportTaskCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartExportTaskCommand = /** @class */ (function (_super) {
    __extends(StartExportTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartExportTaskCommand(input) {
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
    StartExportTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "StartExportTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartExportTaskMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ExportTask.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartExportTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStartExportTaskCommand(input, context);
    };
    StartExportTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStartExportTaskCommand(output, context);
    };
    return StartExportTaskCommand;
}($Command));
export { StartExportTaskCommand };
//# sourceMappingURL=StartExportTaskCommand.js.map