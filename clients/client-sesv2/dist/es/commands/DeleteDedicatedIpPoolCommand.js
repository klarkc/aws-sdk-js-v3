import { __extends } from "tslib";
import { DeleteDedicatedIpPoolRequest, DeleteDedicatedIpPoolResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDedicatedIpPoolCommand, serializeAws_restJson1DeleteDedicatedIpPoolCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a dedicated IP pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteDedicatedIpPoolCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteDedicatedIpPoolCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteDedicatedIpPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDedicatedIpPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteDedicatedIpPoolCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDedicatedIpPoolCommand = /** @class */ (function (_super) {
    __extends(DeleteDedicatedIpPoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDedicatedIpPoolCommand(input) {
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
    DeleteDedicatedIpPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "DeleteDedicatedIpPoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDedicatedIpPoolRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDedicatedIpPoolResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDedicatedIpPoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDedicatedIpPoolCommand(input, context);
    };
    DeleteDedicatedIpPoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDedicatedIpPoolCommand(output, context);
    };
    return DeleteDedicatedIpPoolCommand;
}($Command));
export { DeleteDedicatedIpPoolCommand };
//# sourceMappingURL=DeleteDedicatedIpPoolCommand.js.map