import { __extends } from "tslib";
import { UpdateNumberOfDomainControllersRequest, UpdateNumberOfDomainControllersResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateNumberOfDomainControllersCommand, serializeAws_json1_1UpdateNumberOfDomainControllersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UpdateNumberOfDomainControllersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNumberOfDomainControllersCommandInput} for command's `input` shape.
 * @see {@link UpdateNumberOfDomainControllersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNumberOfDomainControllersCommand = /** @class */ (function (_super) {
    __extends(UpdateNumberOfDomainControllersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNumberOfDomainControllersCommand(input) {
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
    UpdateNumberOfDomainControllersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "UpdateNumberOfDomainControllersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNumberOfDomainControllersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNumberOfDomainControllersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNumberOfDomainControllersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateNumberOfDomainControllersCommand(input, context);
    };
    UpdateNumberOfDomainControllersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateNumberOfDomainControllersCommand(output, context);
    };
    return UpdateNumberOfDomainControllersCommand;
}($Command));
export { UpdateNumberOfDomainControllersCommand };
//# sourceMappingURL=UpdateNumberOfDomainControllersCommand.js.map