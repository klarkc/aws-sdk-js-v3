import { __extends } from "tslib";
import { GetPermissionRequest, GetPermissionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetPermissionCommand, serializeAws_restJson1GetPermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the contents of an AWS RAM permission in JSON format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetPermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetPermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPermissionCommandInput} for command's `input` shape.
 * @see {@link GetPermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPermissionCommand = /** @class */ (function (_super) {
    __extends(GetPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPermissionCommand(input) {
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
    GetPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "GetPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPermissionCommand(input, context);
    };
    GetPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPermissionCommand(output, context);
    };
    return GetPermissionCommand;
}($Command));
export { GetPermissionCommand };
//# sourceMappingURL=GetPermissionCommand.js.map