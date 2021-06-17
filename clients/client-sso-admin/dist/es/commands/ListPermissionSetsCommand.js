import { __extends } from "tslib";
import { ListPermissionSetsRequest, ListPermissionSetsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPermissionSetsCommand, serializeAws_json1_1ListPermissionSetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the <a>PermissionSet</a>s in an SSO instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListPermissionSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionSetsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetsCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPermissionSetsCommand = /** @class */ (function (_super) {
    __extends(ListPermissionSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPermissionSetsCommand(input) {
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
    ListPermissionSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "ListPermissionSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPermissionSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPermissionSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPermissionSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPermissionSetsCommand(input, context);
    };
    ListPermissionSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPermissionSetsCommand(output, context);
    };
    return ListPermissionSetsCommand;
}($Command));
export { ListPermissionSetsCommand };
//# sourceMappingURL=ListPermissionSetsCommand.js.map