import { __extends } from "tslib";
import { DeleteWebACLRequest, DeleteWebACLResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteWebACLCommand, serializeAws_json1_1DeleteWebACLCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified <a>WebACL</a>.</p>
 *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeleteWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebACLCommandInput} for command's `input` shape.
 * @see {@link DeleteWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWebACLCommand = /** @class */ (function (_super) {
    __extends(DeleteWebACLCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWebACLCommand(input) {
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
    DeleteWebACLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "DeleteWebACLCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWebACLRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWebACLResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWebACLCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteWebACLCommand(input, context);
    };
    DeleteWebACLCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteWebACLCommand(output, context);
    };
    return DeleteWebACLCommand;
}($Command));
export { DeleteWebACLCommand };
//# sourceMappingURL=DeleteWebACLCommand.js.map