import { __extends } from "tslib";
import { CancelSchemaExtensionRequest, CancelSchemaExtensionResult } from "../models/models_0";
import { deserializeAws_json1_1CancelSchemaExtensionCommand, serializeAws_json1_1CancelSchemaExtensionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CancelSchemaExtensionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CancelSchemaExtensionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CancelSchemaExtensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSchemaExtensionCommandInput} for command's `input` shape.
 * @see {@link CancelSchemaExtensionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelSchemaExtensionCommand = /** @class */ (function (_super) {
    __extends(CancelSchemaExtensionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelSchemaExtensionCommand(input) {
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
    CancelSchemaExtensionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "CancelSchemaExtensionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelSchemaExtensionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelSchemaExtensionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelSchemaExtensionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelSchemaExtensionCommand(input, context);
    };
    CancelSchemaExtensionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelSchemaExtensionCommand(output, context);
    };
    return CancelSchemaExtensionCommand;
}($Command));
export { CancelSchemaExtensionCommand };
//# sourceMappingURL=CancelSchemaExtensionCommand.js.map