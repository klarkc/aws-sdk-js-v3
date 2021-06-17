import { __extends } from "tslib";
import { DescribeJournalKinesisStreamRequest, DescribeJournalKinesisStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeJournalKinesisStreamCommand, serializeAws_restJson1DescribeJournalKinesisStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed information about a given Amazon QLDB journal stream. The output
 *          includes the Amazon Resource Name (ARN), stream name, current status, creation time, and
 *          the parameters of your original stream creation request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DescribeJournalKinesisStreamCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DescribeJournalKinesisStreamCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new DescribeJournalKinesisStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJournalKinesisStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeJournalKinesisStreamCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeJournalKinesisStreamCommand = /** @class */ (function (_super) {
    __extends(DescribeJournalKinesisStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeJournalKinesisStreamCommand(input) {
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
    DescribeJournalKinesisStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "DescribeJournalKinesisStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeJournalKinesisStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeJournalKinesisStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeJournalKinesisStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeJournalKinesisStreamCommand(input, context);
    };
    DescribeJournalKinesisStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeJournalKinesisStreamCommand(output, context);
    };
    return DescribeJournalKinesisStreamCommand;
}($Command));
export { DescribeJournalKinesisStreamCommand };
//# sourceMappingURL=DescribeJournalKinesisStreamCommand.js.map