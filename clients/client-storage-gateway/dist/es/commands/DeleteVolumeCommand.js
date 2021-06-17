import { __extends } from "tslib";
import { DeleteVolumeInput, DeleteVolumeOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteVolumeCommand, serializeAws_json1_1DeleteVolumeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API.
 *          This operation is only supported in the cached volume and stored volume types. For stored
 *          volume gateways, the local disk that was configured as the storage volume is not deleted.
 *          You can reuse the local disk to create another storage volume.</p>
 *
 *          <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you
 *          are deleting. You should also make sure there is no snapshot in progress. You can use the
 *          Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are
 *          deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
 *             Reference</i>.</p>
 *
 *          <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume
 *          you want to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVolumeCommandInput} for command's `input` shape.
 * @see {@link DeleteVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVolumeCommand = /** @class */ (function (_super) {
    __extends(DeleteVolumeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVolumeCommand(input) {
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
    DeleteVolumeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DeleteVolumeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVolumeInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVolumeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVolumeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteVolumeCommand(input, context);
    };
    DeleteVolumeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteVolumeCommand(output, context);
    };
    return DeleteVolumeCommand;
}($Command));
export { DeleteVolumeCommand };
//# sourceMappingURL=DeleteVolumeCommand.js.map