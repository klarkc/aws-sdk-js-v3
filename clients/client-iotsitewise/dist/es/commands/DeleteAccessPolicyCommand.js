import { __extends } from "tslib";
import { DeleteAccessPolicyRequest, DeleteAccessPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAccessPolicyCommand, serializeAws_restJson1DeleteAccessPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an access policy that grants the specified identity access to the specified
 *       AWS IoT SiteWise Monitor resource. You can use this operation to revoke access to an AWS IoT SiteWise Monitor
 *       resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DeleteAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccessPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteAccessPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccessPolicyCommand(input) {
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
    DeleteAccessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DeleteAccessPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccessPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAccessPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccessPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAccessPolicyCommand(input, context);
    };
    DeleteAccessPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAccessPolicyCommand(output, context);
    };
    return DeleteAccessPolicyCommand;
}($Command));
export { DeleteAccessPolicyCommand };
//# sourceMappingURL=DeleteAccessPolicyCommand.js.map