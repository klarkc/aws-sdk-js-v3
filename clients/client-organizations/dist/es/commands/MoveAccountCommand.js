import { __extends } from "tslib";
import { MoveAccountRequest } from "../models/models_0";
import { deserializeAws_json1_1MoveAccountCommand, serializeAws_json1_1MoveAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Moves an account from its current source parent root or organizational unit (OU) to
 *             the specified destination parent root or OU.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, MoveAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, MoveAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new MoveAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MoveAccountCommandInput} for command's `input` shape.
 * @see {@link MoveAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MoveAccountCommand = /** @class */ (function (_super) {
    __extends(MoveAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MoveAccountCommand(input) {
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
    MoveAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "MoveAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MoveAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MoveAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1MoveAccountCommand(input, context);
    };
    MoveAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1MoveAccountCommand(output, context);
    };
    return MoveAccountCommand;
}($Command));
export { MoveAccountCommand };
//# sourceMappingURL=MoveAccountCommand.js.map