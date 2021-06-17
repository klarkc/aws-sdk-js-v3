import { __extends } from "tslib";
import { DeleteInstallationMediaMessage, InstallationMedia } from "../models/models_0";
import { deserializeAws_queryDeleteInstallationMediaCommand, serializeAws_queryDeleteInstallationMediaCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the installation medium for a DB engine that requires an on-premises customer provided license,
 *             such as Microsoft SQL Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteInstallationMediaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteInstallationMediaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteInstallationMediaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstallationMediaCommandInput} for command's `input` shape.
 * @see {@link DeleteInstallationMediaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInstallationMediaCommand = /** @class */ (function (_super) {
    __extends(DeleteInstallationMediaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInstallationMediaCommand(input) {
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
    DeleteInstallationMediaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteInstallationMediaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInstallationMediaMessage.filterSensitiveLog,
            outputFilterSensitiveLog: InstallationMedia.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInstallationMediaCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteInstallationMediaCommand(input, context);
    };
    DeleteInstallationMediaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteInstallationMediaCommand(output, context);
    };
    return DeleteInstallationMediaCommand;
}($Command));
export { DeleteInstallationMediaCommand };
//# sourceMappingURL=DeleteInstallationMediaCommand.js.map