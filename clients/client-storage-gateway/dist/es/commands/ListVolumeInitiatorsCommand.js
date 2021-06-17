import { __extends } from "tslib";
import { ListVolumeInitiatorsInput, ListVolumeInitiatorsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListVolumeInitiatorsCommand, serializeAws_json1_1ListVolumeInitiatorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists iSCSI initiators that are connected to a volume. You can use this operation to
 *          determine whether a volume is being used or not. This operation is only supported in the
 *          cached volume and stored volume gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumeInitiatorsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumeInitiatorsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListVolumeInitiatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVolumeInitiatorsCommandInput} for command's `input` shape.
 * @see {@link ListVolumeInitiatorsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVolumeInitiatorsCommand = /** @class */ (function (_super) {
    __extends(ListVolumeInitiatorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVolumeInitiatorsCommand(input) {
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
    ListVolumeInitiatorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "ListVolumeInitiatorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVolumeInitiatorsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListVolumeInitiatorsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVolumeInitiatorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListVolumeInitiatorsCommand(input, context);
    };
    ListVolumeInitiatorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListVolumeInitiatorsCommand(output, context);
    };
    return ListVolumeInitiatorsCommand;
}($Command));
export { ListVolumeInitiatorsCommand };
//# sourceMappingURL=ListVolumeInitiatorsCommand.js.map