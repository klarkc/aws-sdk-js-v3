import { __extends } from "tslib";
import { ListRoleAliasesRequest, ListRoleAliasesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListRoleAliasesCommand, serializeAws_restJson1ListRoleAliasesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the role aliases registered in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListRoleAliasesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListRoleAliasesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListRoleAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoleAliasesCommandInput} for command's `input` shape.
 * @see {@link ListRoleAliasesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRoleAliasesCommand = /** @class */ (function (_super) {
    __extends(ListRoleAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRoleAliasesCommand(input) {
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
    ListRoleAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListRoleAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRoleAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRoleAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRoleAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRoleAliasesCommand(input, context);
    };
    ListRoleAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRoleAliasesCommand(output, context);
    };
    return ListRoleAliasesCommand;
}($Command));
export { ListRoleAliasesCommand };
//# sourceMappingURL=ListRoleAliasesCommand.js.map