import { __extends } from "tslib";
import { ListAccountAssignmentsRequest, ListAccountAssignmentsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAccountAssignmentsCommand, serializeAws_json1_1ListAccountAssignmentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the assignee of the specified AWS account with the specified permission
 *        set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountAssignmentsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListAccountAssignmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAssignmentsCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentsCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccountAssignmentsCommand = /** @class */ (function (_super) {
    __extends(ListAccountAssignmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccountAssignmentsCommand(input) {
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
    ListAccountAssignmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "ListAccountAssignmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccountAssignmentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccountAssignmentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccountAssignmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAccountAssignmentsCommand(input, context);
    };
    ListAccountAssignmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAccountAssignmentsCommand(output, context);
    };
    return ListAccountAssignmentsCommand;
}($Command));
export { ListAccountAssignmentsCommand };
//# sourceMappingURL=ListAccountAssignmentsCommand.js.map