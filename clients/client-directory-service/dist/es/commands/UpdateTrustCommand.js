import { __extends } from "tslib";
import { UpdateTrustRequest, UpdateTrustResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateTrustCommand, serializeAws_json1_1UpdateTrustCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UpdateTrustCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrustCommandInput} for command's `input` shape.
 * @see {@link UpdateTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTrustCommand = /** @class */ (function (_super) {
    __extends(UpdateTrustCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTrustCommand(input) {
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
    UpdateTrustCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "UpdateTrustCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTrustRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTrustResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTrustCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTrustCommand(input, context);
    };
    UpdateTrustCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTrustCommand(output, context);
    };
    return UpdateTrustCommand;
}($Command));
export { UpdateTrustCommand };
//# sourceMappingURL=UpdateTrustCommand.js.map