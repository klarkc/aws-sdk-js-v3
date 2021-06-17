import { __extends } from "tslib";
import { GetAccessControlEffectRequest, GetAccessControlEffectResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAccessControlEffectCommand, serializeAws_json1_1GetAccessControlEffectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the effects of an organization's access control rules as they apply to a
 *          specified IPv4 address, access protocol action, or user ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetAccessControlEffectCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetAccessControlEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetAccessControlEffectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessControlEffectCommandInput} for command's `input` shape.
 * @see {@link GetAccessControlEffectCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccessControlEffectCommand = /** @class */ (function (_super) {
    __extends(GetAccessControlEffectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccessControlEffectCommand(input) {
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
    GetAccessControlEffectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "GetAccessControlEffectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccessControlEffectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccessControlEffectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccessControlEffectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAccessControlEffectCommand(input, context);
    };
    GetAccessControlEffectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAccessControlEffectCommand(output, context);
    };
    return GetAccessControlEffectCommand;
}($Command));
export { GetAccessControlEffectCommand };
//# sourceMappingURL=GetAccessControlEffectCommand.js.map