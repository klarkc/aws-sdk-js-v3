import { __extends } from "tslib";
import { RetrieveTapeArchiveInput, RetrieveTapeArchiveOutput } from "../models/models_0";
import { deserializeAws_json1_1RetrieveTapeArchiveCommand, serializeAws_json1_1RetrieveTapeArchiveCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway.
 *          Virtual tapes archived in the VTS are not associated with any gateway. However after a tape
 *          is retrieved, it is associated with a gateway, even though it is also listed in the VTS,
 *          that is, archive. This operation is only supported in the tape gateway type.</p>
 *
 *          <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
 *          another gateway. You must archive the tape again before you can retrieve it to another
 *          gateway. This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RetrieveTapeArchiveCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RetrieveTapeArchiveCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new RetrieveTapeArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetrieveTapeArchiveCommandInput} for command's `input` shape.
 * @see {@link RetrieveTapeArchiveCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RetrieveTapeArchiveCommand = /** @class */ (function (_super) {
    __extends(RetrieveTapeArchiveCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RetrieveTapeArchiveCommand(input) {
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
    RetrieveTapeArchiveCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "RetrieveTapeArchiveCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RetrieveTapeArchiveInput.filterSensitiveLog,
            outputFilterSensitiveLog: RetrieveTapeArchiveOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RetrieveTapeArchiveCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RetrieveTapeArchiveCommand(input, context);
    };
    RetrieveTapeArchiveCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RetrieveTapeArchiveCommand(output, context);
    };
    return RetrieveTapeArchiveCommand;
}($Command));
export { RetrieveTapeArchiveCommand };
//# sourceMappingURL=RetrieveTapeArchiveCommand.js.map