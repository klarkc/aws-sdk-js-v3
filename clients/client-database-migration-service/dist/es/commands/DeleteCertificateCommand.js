import { __extends } from "tslib";
import { DeleteCertificateMessage, DeleteCertificateResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteCertificateCommand, serializeAws_json1_1DeleteCertificateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified certificate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteCertificateCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteCertificateCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCertificateCommand = /** @class */ (function (_super) {
    __extends(DeleteCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCertificateCommand(input) {
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
    DeleteCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DeleteCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCertificateMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCertificateCommand(input, context);
    };
    DeleteCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCertificateCommand(output, context);
    };
    return DeleteCertificateCommand;
}($Command));
export { DeleteCertificateCommand };
//# sourceMappingURL=DeleteCertificateCommand.js.map