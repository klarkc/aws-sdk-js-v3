import { __extends } from "tslib";
import { GetAssociatedRoleRequest, GetAssociatedRoleResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAssociatedRoleCommand, serializeAws_restJson1GetAssociatedRoleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves the role associated with a particular group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetAssociatedRoleCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetAssociatedRoleCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetAssociatedRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedRoleCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedRoleCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssociatedRoleCommand = /** @class */ (function (_super) {
    __extends(GetAssociatedRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAssociatedRoleCommand(input) {
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
    GetAssociatedRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetAssociatedRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAssociatedRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAssociatedRoleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAssociatedRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAssociatedRoleCommand(input, context);
    };
    GetAssociatedRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAssociatedRoleCommand(output, context);
    };
    return GetAssociatedRoleCommand;
}($Command));
export { GetAssociatedRoleCommand };
//# sourceMappingURL=GetAssociatedRoleCommand.js.map