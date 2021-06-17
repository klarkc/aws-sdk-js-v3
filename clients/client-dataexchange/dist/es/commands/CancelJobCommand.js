import { __extends } from "tslib";
import { CancelJobRequest } from "../models/models_0";
import { deserializeAws_restJson1CancelJobCommand, serializeAws_restJson1CancelJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CancelJobCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CancelJobCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelJobCommand = /** @class */ (function (_super) {
    __extends(CancelJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelJobCommand(input) {
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
    CancelJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "CancelJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelJobCommand(input, context);
    };
    CancelJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelJobCommand(output, context);
    };
    return CancelJobCommand;
}($Command));
export { CancelJobCommand };
//# sourceMappingURL=CancelJobCommand.js.map