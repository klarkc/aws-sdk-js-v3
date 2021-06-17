import { __extends } from "tslib";
import { CancelJournalKinesisStreamRequest, CancelJournalKinesisStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelJournalKinesisStreamCommand, serializeAws_restJson1CancelJournalKinesisStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current
 *          status must be <code>ACTIVE</code>.</p>
 *          <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are
 *          subject to a 7-day retention period, so they are automatically deleted after this limit
 *          expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, CancelJournalKinesisStreamCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, CancelJournalKinesisStreamCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new CancelJournalKinesisStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJournalKinesisStreamCommandInput} for command's `input` shape.
 * @see {@link CancelJournalKinesisStreamCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelJournalKinesisStreamCommand = /** @class */ (function (_super) {
    __extends(CancelJournalKinesisStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelJournalKinesisStreamCommand(input) {
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
    CancelJournalKinesisStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "CancelJournalKinesisStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelJournalKinesisStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelJournalKinesisStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelJournalKinesisStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelJournalKinesisStreamCommand(input, context);
    };
    CancelJournalKinesisStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelJournalKinesisStreamCommand(output, context);
    };
    return CancelJournalKinesisStreamCommand;
}($Command));
export { CancelJournalKinesisStreamCommand };
//# sourceMappingURL=CancelJournalKinesisStreamCommand.js.map