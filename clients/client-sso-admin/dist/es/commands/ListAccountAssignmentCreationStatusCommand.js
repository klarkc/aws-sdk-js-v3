import { __extends } from "tslib";
import { ListAccountAssignmentCreationStatusRequest, ListAccountAssignmentCreationStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListAccountAssignmentCreationStatusCommand, serializeAws_json1_1ListAccountAssignmentCreationStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the status of the AWS account assignment creation requests for a specified SSO
 *        instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentCreationStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountAssignmentCreationStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListAccountAssignmentCreationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAssignmentCreationStatusCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccountAssignmentCreationStatusCommand = /** @class */ (function (_super) {
    __extends(ListAccountAssignmentCreationStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccountAssignmentCreationStatusCommand(input) {
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
    ListAccountAssignmentCreationStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "ListAccountAssignmentCreationStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccountAssignmentCreationStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccountAssignmentCreationStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccountAssignmentCreationStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAccountAssignmentCreationStatusCommand(input, context);
    };
    ListAccountAssignmentCreationStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAccountAssignmentCreationStatusCommand(output, context);
    };
    return ListAccountAssignmentCreationStatusCommand;
}($Command));
export { ListAccountAssignmentCreationStatusCommand };
//# sourceMappingURL=ListAccountAssignmentCreationStatusCommand.js.map