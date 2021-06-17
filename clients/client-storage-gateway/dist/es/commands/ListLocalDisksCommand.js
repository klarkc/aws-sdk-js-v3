import { __extends } from "tslib";
import { ListLocalDisksInput, ListLocalDisksOutput } from "../models/models_0";
import { deserializeAws_json1_1ListLocalDisksCommand, serializeAws_json1_1ListLocalDisksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the gateway's local disks. To specify which gateway to describe,
 *          you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p>
 *
 *          <p>The request returns a list of all disks, specifying which are configured as working
 *          storage, cache storage, or stored volume or not configured at all. The response includes a
 *             <code>DiskStatus</code> field. This field can have a value of present (the disk is
 *          available to use), missing (the disk is no longer connected to the gateway), or mismatch
 *          (the disk node is occupied by a disk that has incorrect metadata or the disk content is
 *          corrupted).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListLocalDisksCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListLocalDisksCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListLocalDisksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLocalDisksCommandInput} for command's `input` shape.
 * @see {@link ListLocalDisksCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLocalDisksCommand = /** @class */ (function (_super) {
    __extends(ListLocalDisksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLocalDisksCommand(input) {
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
    ListLocalDisksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "ListLocalDisksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLocalDisksInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListLocalDisksOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLocalDisksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLocalDisksCommand(input, context);
    };
    ListLocalDisksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLocalDisksCommand(output, context);
    };
    return ListLocalDisksCommand;
}($Command));
export { ListLocalDisksCommand };
//# sourceMappingURL=ListLocalDisksCommand.js.map