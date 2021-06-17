import { __extends } from "tslib";
import { UpdateAccessPolicyRequest, UpdateAccessPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateAccessPolicyCommand, serializeAws_restJson1UpdateAccessPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing access policy that specifies an identity's access to an AWS IoT SiteWise Monitor
 *       portal or project resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAccessPolicyCommand = /** @class */ (function (_super) {
    __extends(UpdateAccessPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAccessPolicyCommand(input) {
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
    UpdateAccessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "UpdateAccessPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAccessPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAccessPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAccessPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAccessPolicyCommand(input, context);
    };
    UpdateAccessPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAccessPolicyCommand(output, context);
    };
    return UpdateAccessPolicyCommand;
}($Command));
export { UpdateAccessPolicyCommand };
//# sourceMappingURL=UpdateAccessPolicyCommand.js.map