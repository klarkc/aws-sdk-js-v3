import { __extends } from "tslib";
import { ExportJournalToS3Request, ExportJournalToS3Response } from "../models/models_0";
import { deserializeAws_restJson1ExportJournalToS3Command, serializeAws_restJson1ExportJournalToS3Command, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports journal contents within a date and time range from a ledger into a specified
 *          Amazon Simple Storage Service (Amazon S3) bucket. The data is written as files in Amazon Ion format.</p>
 *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then
 *          throws <code>ResourcePreconditionNotMetException</code>.</p>
 *          <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond
 *          this limit, journal export requests throw <code>LimitExceededException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ExportJournalToS3Command } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ExportJournalToS3Command } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ExportJournalToS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportJournalToS3CommandInput} for command's `input` shape.
 * @see {@link ExportJournalToS3CommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportJournalToS3Command = /** @class */ (function (_super) {
    __extends(ExportJournalToS3Command, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportJournalToS3Command(input) {
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
    ExportJournalToS3Command.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "ExportJournalToS3Command";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportJournalToS3Request.filterSensitiveLog,
            outputFilterSensitiveLog: ExportJournalToS3Response.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportJournalToS3Command.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ExportJournalToS3Command(input, context);
    };
    ExportJournalToS3Command.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ExportJournalToS3Command(output, context);
    };
    return ExportJournalToS3Command;
}($Command));
export { ExportJournalToS3Command };
//# sourceMappingURL=ExportJournalToS3Command.js.map