import { __extends } from "tslib";
import { UpdateWorkforceRequest, UpdateWorkforceResponse } from "../models/models_3";
import { deserializeAws_json1_1UpdateWorkforceCommand, serializeAws_json1_1UpdateWorkforceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this operation to update your workforce. You can use this operation to
 *         require that workers use specific IP addresses to work on tasks
 *         and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p>
 *
 *         <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses.
 *         You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>.
 *         By default, a workforce isn't restricted to specific IP addresses. If you specify a
 *             range of IP addresses, workers who attempt to access tasks using any IP address outside
 *             the specified range are denied and get a <code>Not Found</code> error message on
 *             the worker portal.</p>
 *         <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using
 *             your own OIDC IdP. </p>
 *         <important>
 *             <p>You can only update your OIDC IdP configuration when there are no work teams
 *                 associated with your workforce. You can delete work teams using the  operation.</p>
 *         </important>
 *         <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you
 *         can view details about your update workforce using the
 *             operation.</p>
 *         <important>
 *             <p>This operation only applies to private workforces.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateWorkforceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkforceCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorkforceCommand = /** @class */ (function (_super) {
    __extends(UpdateWorkforceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWorkforceCommand(input) {
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
    UpdateWorkforceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateWorkforceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWorkforceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWorkforceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWorkforceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateWorkforceCommand(input, context);
    };
    UpdateWorkforceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateWorkforceCommand(output, context);
    };
    return UpdateWorkforceCommand;
}($Command));
export { UpdateWorkforceCommand };
//# sourceMappingURL=UpdateWorkforceCommand.js.map