import { __extends } from "tslib";
import { ListVolumeRecoveryPointsInput, ListVolumeRecoveryPointsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListVolumeRecoveryPointsCommand, serializeAws_json1_1ListVolumeRecoveryPointsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the recovery points for a specified gateway. This operation is only supported in
 *          the cached volume gateway type.</p>
 *
 *          <p>Each cache volume has one recovery point. A volume recovery point is a point in time at
 *          which all data of the volume is consistent and from which you can create a snapshot or
 *          clone a new cached volume from a source volume. To create a snapshot from a volume recovery
 *          point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumeRecoveryPointsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumeRecoveryPointsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListVolumeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVolumeRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link ListVolumeRecoveryPointsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVolumeRecoveryPointsCommand = /** @class */ (function (_super) {
    __extends(ListVolumeRecoveryPointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVolumeRecoveryPointsCommand(input) {
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
    ListVolumeRecoveryPointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "ListVolumeRecoveryPointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVolumeRecoveryPointsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListVolumeRecoveryPointsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVolumeRecoveryPointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListVolumeRecoveryPointsCommand(input, context);
    };
    ListVolumeRecoveryPointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListVolumeRecoveryPointsCommand(output, context);
    };
    return ListVolumeRecoveryPointsCommand;
}($Command));
export { ListVolumeRecoveryPointsCommand };
//# sourceMappingURL=ListVolumeRecoveryPointsCommand.js.map