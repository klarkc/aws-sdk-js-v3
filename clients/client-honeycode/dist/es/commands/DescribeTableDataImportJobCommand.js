import { __extends } from "tslib";
import { DescribeTableDataImportJobRequest, DescribeTableDataImportJobResult } from "../models/models_0";
import { deserializeAws_restJson1DescribeTableDataImportJobCommand, serializeAws_restJson1DescribeTableDataImportJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, DescribeTableDataImportJobCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, DescribeTableDataImportJobCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new DescribeTableDataImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableDataImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTableDataImportJobCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTableDataImportJobCommand = /** @class */ (function (_super) {
    __extends(DescribeTableDataImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTableDataImportJobCommand(input) {
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
    DescribeTableDataImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "DescribeTableDataImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTableDataImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTableDataImportJobResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTableDataImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeTableDataImportJobCommand(input, context);
    };
    DescribeTableDataImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeTableDataImportJobCommand(output, context);
    };
    return DescribeTableDataImportJobCommand;
}($Command));
export { DescribeTableDataImportJobCommand };
//# sourceMappingURL=DescribeTableDataImportJobCommand.js.map