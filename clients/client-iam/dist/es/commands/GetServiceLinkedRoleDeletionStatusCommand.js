import { __extends } from "tslib";
import { GetServiceLinkedRoleDeletionStatusRequest, GetServiceLinkedRoleDeletionStatusResponse, } from "../models/models_0";
import { deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand, serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion,
 *             you can use the <code>DeletionTaskId</code> parameter in
 *                 <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion.
 *             If the deletion fails, this operation returns the reason that it failed, if that
 *             information is returned by the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetServiceLinkedRoleDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetServiceLinkedRoleDeletionStatusCommand = /** @class */ (function (_super) {
    __extends(GetServiceLinkedRoleDeletionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetServiceLinkedRoleDeletionStatusCommand(input) {
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
    GetServiceLinkedRoleDeletionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetServiceLinkedRoleDeletionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetServiceLinkedRoleDeletionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetServiceLinkedRoleDeletionStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetServiceLinkedRoleDeletionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(input, context);
    };
    GetServiceLinkedRoleDeletionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(output, context);
    };
    return GetServiceLinkedRoleDeletionStatusCommand;
}($Command));
export { GetServiceLinkedRoleDeletionStatusCommand };
//# sourceMappingURL=GetServiceLinkedRoleDeletionStatusCommand.js.map