import { __extends } from "tslib";
import { InstallationMedia } from "../models/models_0";
import { ImportInstallationMediaMessage } from "../models/models_1";
import { deserializeAws_queryImportInstallationMediaCommand, serializeAws_queryImportInstallationMediaCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports the installation media for a DB engine that requires an on-premises
 *           customer provided license, such as SQL Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ImportInstallationMediaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ImportInstallationMediaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ImportInstallationMediaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportInstallationMediaCommandInput} for command's `input` shape.
 * @see {@link ImportInstallationMediaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportInstallationMediaCommand = /** @class */ (function (_super) {
    __extends(ImportInstallationMediaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportInstallationMediaCommand(input) {
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
    ImportInstallationMediaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ImportInstallationMediaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportInstallationMediaMessage.filterSensitiveLog,
            outputFilterSensitiveLog: InstallationMedia.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportInstallationMediaCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryImportInstallationMediaCommand(input, context);
    };
    ImportInstallationMediaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryImportInstallationMediaCommand(output, context);
    };
    return ImportInstallationMediaCommand;
}($Command));
export { ImportInstallationMediaCommand };
//# sourceMappingURL=ImportInstallationMediaCommand.js.map