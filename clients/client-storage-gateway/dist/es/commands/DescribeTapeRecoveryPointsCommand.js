import { __extends } from "tslib";
import { DescribeTapeRecoveryPointsInput, DescribeTapeRecoveryPointsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeTapeRecoveryPointsCommand, serializeAws_json1_1DescribeTapeRecoveryPointsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of virtual tape recovery points that are available for the specified tape
 *          gateway.</p>
 *
 *          <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the
 *          virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery
 *          points can be recovered to a new gateway. This operation is only supported in the tape
 *          gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapeRecoveryPointsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapeRecoveryPointsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeTapeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTapeRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link DescribeTapeRecoveryPointsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTapeRecoveryPointsCommand = /** @class */ (function (_super) {
    __extends(DescribeTapeRecoveryPointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTapeRecoveryPointsCommand(input) {
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
    DescribeTapeRecoveryPointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeTapeRecoveryPointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTapeRecoveryPointsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTapeRecoveryPointsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTapeRecoveryPointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTapeRecoveryPointsCommand(input, context);
    };
    DescribeTapeRecoveryPointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTapeRecoveryPointsCommand(output, context);
    };
    return DescribeTapeRecoveryPointsCommand;
}($Command));
export { DescribeTapeRecoveryPointsCommand };
//# sourceMappingURL=DescribeTapeRecoveryPointsCommand.js.map