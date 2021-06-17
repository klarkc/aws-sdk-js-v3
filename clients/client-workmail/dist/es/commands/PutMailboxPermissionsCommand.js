import { __extends } from "tslib";
import { PutMailboxPermissionsRequest, PutMailboxPermissionsResponse } from "../models/models_0";
import { deserializeAws_json1_1PutMailboxPermissionsCommand, serializeAws_json1_1PutMailboxPermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets permissions for a user, group, or resource. This replaces any pre-existing
 *          permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutMailboxPermissionsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new PutMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link PutMailboxPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutMailboxPermissionsCommand = /** @class */ (function (_super) {
    __extends(PutMailboxPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutMailboxPermissionsCommand(input) {
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
    PutMailboxPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "PutMailboxPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutMailboxPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutMailboxPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutMailboxPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutMailboxPermissionsCommand(input, context);
    };
    PutMailboxPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutMailboxPermissionsCommand(output, context);
    };
    return PutMailboxPermissionsCommand;
}($Command));
export { PutMailboxPermissionsCommand };
//# sourceMappingURL=PutMailboxPermissionsCommand.js.map