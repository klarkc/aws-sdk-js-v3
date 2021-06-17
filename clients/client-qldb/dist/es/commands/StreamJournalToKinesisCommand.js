import { __extends } from "tslib";
import { StreamJournalToKinesisRequest, StreamJournalToKinesisResponse } from "../models/models_0";
import { deserializeAws_restJson1StreamJournalToKinesisCommand, serializeAws_restJson1StreamJournalToKinesisCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a journal stream for a given Amazon QLDB ledger. The stream captures every
 *          document revision that is committed to the ledger's journal and delivers the data to a
 *          specified Amazon Kinesis Data Streams resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, StreamJournalToKinesisCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, StreamJournalToKinesisCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new StreamJournalToKinesisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StreamJournalToKinesisCommandInput} for command's `input` shape.
 * @see {@link StreamJournalToKinesisCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StreamJournalToKinesisCommand = /** @class */ (function (_super) {
    __extends(StreamJournalToKinesisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StreamJournalToKinesisCommand(input) {
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
    StreamJournalToKinesisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "StreamJournalToKinesisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StreamJournalToKinesisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StreamJournalToKinesisResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StreamJournalToKinesisCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StreamJournalToKinesisCommand(input, context);
    };
    StreamJournalToKinesisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StreamJournalToKinesisCommand(output, context);
    };
    return StreamJournalToKinesisCommand;
}($Command));
export { StreamJournalToKinesisCommand };
//# sourceMappingURL=StreamJournalToKinesisCommand.js.map