import { __extends } from "tslib";
import { DeleteFargateProfileRequest, DeleteFargateProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteFargateProfileCommand, serializeAws_restJson1DeleteFargateProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an AWS Fargate profile.</p>
 *         <p>When you delete a Fargate profile, any pods running on Fargate that were created with the
 *             profile are deleted. If those pods match another Fargate profile, then they are scheduled
 *             on Fargate with that profile. If they no longer match any Fargate profiles, then they are not
 *             scheduled on Fargate and they may remain in a pending state.</p>
 *         <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a
 *             time. You must wait for a Fargate profile to finish deleting before you can delete any
 *             other profiles in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeleteFargateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFargateProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteFargateProfileCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFargateProfileCommand = /** @class */ (function (_super) {
    __extends(DeleteFargateProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFargateProfileCommand(input) {
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
    DeleteFargateProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DeleteFargateProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFargateProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFargateProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFargateProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFargateProfileCommand(input, context);
    };
    DeleteFargateProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFargateProfileCommand(output, context);
    };
    return DeleteFargateProfileCommand;
}($Command));
export { DeleteFargateProfileCommand };
//# sourceMappingURL=DeleteFargateProfileCommand.js.map