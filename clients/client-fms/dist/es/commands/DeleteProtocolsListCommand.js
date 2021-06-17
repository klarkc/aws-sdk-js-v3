import { __extends } from "tslib";
import { DeleteProtocolsListRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteProtocolsListCommand, serializeAws_json1_1DeleteProtocolsListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently deletes an AWS Firewall Manager protocols list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteProtocolsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DeleteProtocolsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProtocolsListCommandInput} for command's `input` shape.
 * @see {@link DeleteProtocolsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProtocolsListCommand = /** @class */ (function (_super) {
    __extends(DeleteProtocolsListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProtocolsListCommand(input) {
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
    DeleteProtocolsListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "DeleteProtocolsListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProtocolsListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProtocolsListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteProtocolsListCommand(input, context);
    };
    DeleteProtocolsListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteProtocolsListCommand(output, context);
    };
    return DeleteProtocolsListCommand;
}($Command));
export { DeleteProtocolsListCommand };
//# sourceMappingURL=DeleteProtocolsListCommand.js.map