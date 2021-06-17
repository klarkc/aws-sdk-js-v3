import { __extends } from "tslib";
import { ListJournalKinesisStreamsForLedgerRequest, ListJournalKinesisStreamsForLedgerResponse, } from "../models/models_0";
import { deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand, serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of all Amazon QLDB journal stream descriptors for a given ledger. The
 *          output of each stream descriptor includes the same details that are returned by
 *             <code>DescribeJournalKinesisStream</code>.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code>
 *          multiple times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalKinesisStreamsForLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalKinesisStreamsForLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListJournalKinesisStreamsForLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJournalKinesisStreamsForLedgerCommandInput} for command's `input` shape.
 * @see {@link ListJournalKinesisStreamsForLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJournalKinesisStreamsForLedgerCommand = /** @class */ (function (_super) {
    __extends(ListJournalKinesisStreamsForLedgerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJournalKinesisStreamsForLedgerCommand(input) {
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
    ListJournalKinesisStreamsForLedgerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "ListJournalKinesisStreamsForLedgerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJournalKinesisStreamsForLedgerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJournalKinesisStreamsForLedgerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJournalKinesisStreamsForLedgerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand(input, context);
    };
    ListJournalKinesisStreamsForLedgerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand(output, context);
    };
    return ListJournalKinesisStreamsForLedgerCommand;
}($Command));
export { ListJournalKinesisStreamsForLedgerCommand };
//# sourceMappingURL=ListJournalKinesisStreamsForLedgerCommand.js.map