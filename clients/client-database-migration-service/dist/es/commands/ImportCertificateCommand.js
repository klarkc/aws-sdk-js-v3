import { __extends } from "tslib";
import { ImportCertificateMessage, ImportCertificateResponse } from "../models/models_0";
import { deserializeAws_json1_1ImportCertificateCommand, serializeAws_json1_1ImportCertificateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Uploads the specified certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ImportCertificateCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ImportCertificateCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ImportCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportCertificateCommandInput} for command's `input` shape.
 * @see {@link ImportCertificateCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportCertificateCommand = /** @class */ (function (_super) {
    __extends(ImportCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportCertificateCommand(input) {
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
    ImportCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "ImportCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportCertificateMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ImportCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportCertificateCommand(input, context);
    };
    ImportCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportCertificateCommand(output, context);
    };
    return ImportCertificateCommand;
}($Command));
export { ImportCertificateCommand };
//# sourceMappingURL=ImportCertificateCommand.js.map