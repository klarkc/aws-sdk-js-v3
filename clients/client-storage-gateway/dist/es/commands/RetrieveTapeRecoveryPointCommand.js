import { __extends } from "tslib";
import { RetrieveTapeRecoveryPointInput, RetrieveTapeRecoveryPointOutput } from "../models/models_0";
import { deserializeAws_json1_1RetrieveTapeRecoveryPointCommand, serializeAws_json1_1RetrieveTapeRecoveryPointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the recovery point for the specified virtual tape. This operation is only
 *          supported in the tape gateway type.</p>
 *
 *          <p>A recovery point is a point in time view of a virtual tape at which all the data on the
 *          tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be
 *          recovered to a new gateway.</p>
 *
 *          <note>
 *             <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is
 *             read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge
 *             for retrieving recovery points.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RetrieveTapeRecoveryPointCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RetrieveTapeRecoveryPointCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new RetrieveTapeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetrieveTapeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link RetrieveTapeRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RetrieveTapeRecoveryPointCommand = /** @class */ (function (_super) {
    __extends(RetrieveTapeRecoveryPointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RetrieveTapeRecoveryPointCommand(input) {
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
    RetrieveTapeRecoveryPointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "RetrieveTapeRecoveryPointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RetrieveTapeRecoveryPointInput.filterSensitiveLog,
            outputFilterSensitiveLog: RetrieveTapeRecoveryPointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RetrieveTapeRecoveryPointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RetrieveTapeRecoveryPointCommand(input, context);
    };
    RetrieveTapeRecoveryPointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RetrieveTapeRecoveryPointCommand(output, context);
    };
    return RetrieveTapeRecoveryPointCommand;
}($Command));
export { RetrieveTapeRecoveryPointCommand };
//# sourceMappingURL=RetrieveTapeRecoveryPointCommand.js.map