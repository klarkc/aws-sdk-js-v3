import { __extends } from "tslib";
import { DescribeLedgerRequest, DescribeLedgerResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeLedgerCommand, serializeAws_restJson1DescribeLedgerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a ledger, including its state and when it was created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DescribeLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DescribeLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new DescribeLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLedgerCommandInput} for command's `input` shape.
 * @see {@link DescribeLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLedgerCommand = /** @class */ (function (_super) {
    __extends(DescribeLedgerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLedgerCommand(input) {
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
    DescribeLedgerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "DescribeLedgerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLedgerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLedgerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLedgerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeLedgerCommand(input, context);
    };
    DescribeLedgerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeLedgerCommand(output, context);
    };
    return DescribeLedgerCommand;
}($Command));
export { DescribeLedgerCommand };
//# sourceMappingURL=DescribeLedgerCommand.js.map