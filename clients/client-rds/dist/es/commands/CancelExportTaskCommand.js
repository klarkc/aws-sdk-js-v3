import { __extends } from "tslib";
import { CancelExportTaskMessage, ExportTask } from "../models/models_0";
import { deserializeAws_queryCancelExportTaskCommand, serializeAws_queryCancelExportTaskCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels an export task in progress that is exporting a snapshot to Amazon S3.
 *             Any data that has already been written to the S3 bucket isn't removed.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CancelExportTaskCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CancelExportTaskCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelExportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelExportTaskCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelExportTaskCommand = /** @class */ (function (_super) {
    __extends(CancelExportTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelExportTaskCommand(input) {
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
    CancelExportTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CancelExportTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelExportTaskMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ExportTask.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelExportTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCancelExportTaskCommand(input, context);
    };
    CancelExportTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCancelExportTaskCommand(output, context);
    };
    return CancelExportTaskCommand;
}($Command));
export { CancelExportTaskCommand };
//# sourceMappingURL=CancelExportTaskCommand.js.map