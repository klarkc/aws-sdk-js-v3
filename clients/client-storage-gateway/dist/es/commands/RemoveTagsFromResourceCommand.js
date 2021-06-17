import { __extends } from "tslib";
import { RemoveTagsFromResourceInput, RemoveTagsFromResourceOutput } from "../models/models_0";
import { deserializeAws_json1_1RemoveTagsFromResourceCommand, serializeAws_json1_1RemoveTagsFromResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes one or more tags from the specified resource. This operation is supported in
 *          storage gateways of all types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RemoveTagsFromResourceCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RemoveTagsFromResourceCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new RemoveTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromResourceCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromResourceCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveTagsFromResourceCommand = /** @class */ (function (_super) {
    __extends(RemoveTagsFromResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveTagsFromResourceCommand(input) {
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
    RemoveTagsFromResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "RemoveTagsFromResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveTagsFromResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveTagsFromResourceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveTagsFromResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveTagsFromResourceCommand(input, context);
    };
    RemoveTagsFromResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommand(output, context);
    };
    return RemoveTagsFromResourceCommand;
}($Command));
export { RemoveTagsFromResourceCommand };
//# sourceMappingURL=RemoveTagsFromResourceCommand.js.map