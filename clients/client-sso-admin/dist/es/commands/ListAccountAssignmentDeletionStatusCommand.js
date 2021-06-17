import { __extends } from "tslib";
import { ListAccountAssignmentDeletionStatusRequest, ListAccountAssignmentDeletionStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommand, serializeAws_json1_1ListAccountAssignmentDeletionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the status of the AWS account assignment deletion requests for a specified SSO
 *        instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentDeletionStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountAssignmentDeletionStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListAccountAssignmentDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAssignmentDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccountAssignmentDeletionStatusCommand = /** @class */ (function (_super) {
    __extends(ListAccountAssignmentDeletionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccountAssignmentDeletionStatusCommand(input) {
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
    ListAccountAssignmentDeletionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "ListAccountAssignmentDeletionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccountAssignmentDeletionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccountAssignmentDeletionStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccountAssignmentDeletionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAccountAssignmentDeletionStatusCommand(input, context);
    };
    ListAccountAssignmentDeletionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommand(output, context);
    };
    return ListAccountAssignmentDeletionStatusCommand;
}($Command));
export { ListAccountAssignmentDeletionStatusCommand };
//# sourceMappingURL=ListAccountAssignmentDeletionStatusCommand.js.map