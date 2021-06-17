import { __extends } from "tslib";
import { ListJournalS3ExportsForLedgerRequest, ListJournalS3ExportsForLedgerResponse } from "../models/models_0";
import { deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand, serializeAws_restJson1ListJournalS3ExportsForLedgerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of journal export job descriptions for a specified ledger.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalS3ExportsForLedger</code>
 *          multiple times.</p>
 *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer
 *          Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalS3ExportsForLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalS3ExportsForLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListJournalS3ExportsForLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJournalS3ExportsForLedgerCommandInput} for command's `input` shape.
 * @see {@link ListJournalS3ExportsForLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJournalS3ExportsForLedgerCommand = /** @class */ (function (_super) {
    __extends(ListJournalS3ExportsForLedgerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJournalS3ExportsForLedgerCommand(input) {
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
    ListJournalS3ExportsForLedgerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "ListJournalS3ExportsForLedgerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJournalS3ExportsForLedgerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJournalS3ExportsForLedgerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJournalS3ExportsForLedgerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJournalS3ExportsForLedgerCommand(input, context);
    };
    ListJournalS3ExportsForLedgerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand(output, context);
    };
    return ListJournalS3ExportsForLedgerCommand;
}($Command));
export { ListJournalS3ExportsForLedgerCommand };
//# sourceMappingURL=ListJournalS3ExportsForLedgerCommand.js.map