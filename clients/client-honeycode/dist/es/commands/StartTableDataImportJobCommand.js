import { __extends } from "tslib";
import { StartTableDataImportJobRequest, StartTableDataImportJobResult } from "../models/models_0";
import { deserializeAws_restJson1StartTableDataImportJobCommand, serializeAws_restJson1StartTableDataImportJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The StartTableDataImportJob API allows you to start an import job on a table. This API will only return
 *             the id of the job that was started. To find out the status of the import request, you need to call the
 *             DescribeTableDataImportJob API.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, StartTableDataImportJobCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, StartTableDataImportJobCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new StartTableDataImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTableDataImportJobCommandInput} for command's `input` shape.
 * @see {@link StartTableDataImportJobCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartTableDataImportJobCommand = /** @class */ (function (_super) {
    __extends(StartTableDataImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartTableDataImportJobCommand(input) {
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
    StartTableDataImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "StartTableDataImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartTableDataImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartTableDataImportJobResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartTableDataImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartTableDataImportJobCommand(input, context);
    };
    StartTableDataImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartTableDataImportJobCommand(output, context);
    };
    return StartTableDataImportJobCommand;
}($Command));
export { StartTableDataImportJobCommand };
//# sourceMappingURL=StartTableDataImportJobCommand.js.map