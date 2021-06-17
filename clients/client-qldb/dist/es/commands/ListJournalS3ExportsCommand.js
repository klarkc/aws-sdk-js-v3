import { __extends } from "tslib";
import { ListJournalS3ExportsRequest, ListJournalS3ExportsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListJournalS3ExportsCommand, serializeAws_restJson1ListJournalS3ExportsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of journal export job descriptions for all ledgers that are associated
 *          with the current AWS account and Region.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalS3Exports</code> multiple
 *          times.</p>
 *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer
 *          Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalS3ExportsCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalS3ExportsCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListJournalS3ExportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJournalS3ExportsCommandInput} for command's `input` shape.
 * @see {@link ListJournalS3ExportsCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJournalS3ExportsCommand = /** @class */ (function (_super) {
    __extends(ListJournalS3ExportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJournalS3ExportsCommand(input) {
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
    ListJournalS3ExportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "ListJournalS3ExportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJournalS3ExportsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJournalS3ExportsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJournalS3ExportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJournalS3ExportsCommand(input, context);
    };
    ListJournalS3ExportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJournalS3ExportsCommand(output, context);
    };
    return ListJournalS3ExportsCommand;
}($Command));
export { ListJournalS3ExportsCommand };
//# sourceMappingURL=ListJournalS3ExportsCommand.js.map