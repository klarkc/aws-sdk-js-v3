import { __extends } from "tslib";
import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateIPSetCommand, serializeAws_json1_1UpdateIPSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified <a>IPSet</a>. </p>
 *          <note>
 *             <p>This operation completely replaces any IP address specifications that you already have in the IP set with the ones that you provide to this call. If you want to add to or modify the addresses that are already in the IP set, retrieve those by calling <a>GetIPSet</a>, update them, and provide the complete updated array of IP addresses to this call.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateIPSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateIPSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new UpdateIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIPSetCommandInput} for command's `input` shape.
 * @see {@link UpdateIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIPSetCommand = /** @class */ (function (_super) {
    __extends(UpdateIPSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIPSetCommand(input) {
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
    UpdateIPSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "UpdateIPSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIPSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIPSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIPSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateIPSetCommand(input, context);
    };
    UpdateIPSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateIPSetCommand(output, context);
    };
    return UpdateIPSetCommand;
}($Command));
export { UpdateIPSetCommand };
//# sourceMappingURL=UpdateIPSetCommand.js.map