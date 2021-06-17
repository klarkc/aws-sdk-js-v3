import { __extends } from "tslib";
import { EnableSharingWithAwsOrganizationRequest, EnableSharingWithAwsOrganizationResponse } from "../models/models_0";
import { deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand, serializeAws_restJson1EnableSharingWithAwsOrganizationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables resource sharing within your AWS Organization.</p>
 *          <p>The caller must be the master account for the AWS Organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, EnableSharingWithAwsOrganizationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, EnableSharingWithAwsOrganizationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new EnableSharingWithAwsOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSharingWithAwsOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableSharingWithAwsOrganizationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableSharingWithAwsOrganizationCommand = /** @class */ (function (_super) {
    __extends(EnableSharingWithAwsOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableSharingWithAwsOrganizationCommand(input) {
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
    EnableSharingWithAwsOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "EnableSharingWithAwsOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableSharingWithAwsOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableSharingWithAwsOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableSharingWithAwsOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1EnableSharingWithAwsOrganizationCommand(input, context);
    };
    EnableSharingWithAwsOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand(output, context);
    };
    return EnableSharingWithAwsOrganizationCommand;
}($Command));
export { EnableSharingWithAwsOrganizationCommand };
//# sourceMappingURL=EnableSharingWithAwsOrganizationCommand.js.map