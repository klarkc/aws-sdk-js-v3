import { __extends } from "tslib";
import { DeleteInterconnectRequest, DeleteInterconnectResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteInterconnectCommand, serializeAws_json1_1DeleteInterconnectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use
 *         by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteInterconnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInterconnectCommandInput} for command's `input` shape.
 * @see {@link DeleteInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInterconnectCommand = /** @class */ (function (_super) {
    __extends(DeleteInterconnectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInterconnectCommand(input) {
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
    DeleteInterconnectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DeleteInterconnectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInterconnectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInterconnectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInterconnectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteInterconnectCommand(input, context);
    };
    DeleteInterconnectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteInterconnectCommand(output, context);
    };
    return DeleteInterconnectCommand;
}($Command));
export { DeleteInterconnectCommand };
//# sourceMappingURL=DeleteInterconnectCommand.js.map