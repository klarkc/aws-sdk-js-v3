import { __extends } from "tslib";
import { ListVolumesInput, ListVolumesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListVolumesCommand, serializeAws_json1_1ListVolumesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The
 *          response includes only the volume ARNs. If you want additional volume information, use the
 *             <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p>
 *
 *          <p>The operation supports pagination. By default, the operation returns a maximum of up to
 *          100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit
 *          the number of volumes in the response. If the number of volumes returned in the response is
 *          truncated, the response includes a Marker field. You can use this Marker value in your
 *          subsequent request to retrieve the next set of volumes. This operation is only supported in
 *          the cached volume and stored volume gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVolumesCommandInput} for command's `input` shape.
 * @see {@link ListVolumesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVolumesCommand = /** @class */ (function (_super) {
    __extends(ListVolumesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVolumesCommand(input) {
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
    ListVolumesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "ListVolumesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVolumesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListVolumesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVolumesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListVolumesCommand(input, context);
    };
    ListVolumesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListVolumesCommand(output, context);
    };
    return ListVolumesCommand;
}($Command));
export { ListVolumesCommand };
//# sourceMappingURL=ListVolumesCommand.js.map