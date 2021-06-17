import { __extends } from "tslib";
import { PutDataCatalogEncryptionSettingsRequest, PutDataCatalogEncryptionSettingsResponse } from "../models/models_1";
import { deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand, serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the security configuration for a specified catalog. After the configuration has been
 *       set, the specified encryption is applied to every catalog write thereafter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new PutDataCatalogEncryptionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDataCatalogEncryptionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutDataCatalogEncryptionSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDataCatalogEncryptionSettingsCommand = /** @class */ (function (_super) {
    __extends(PutDataCatalogEncryptionSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDataCatalogEncryptionSettingsCommand(input) {
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
    PutDataCatalogEncryptionSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "PutDataCatalogEncryptionSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDataCatalogEncryptionSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutDataCatalogEncryptionSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDataCatalogEncryptionSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand(input, context);
    };
    PutDataCatalogEncryptionSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand(output, context);
    };
    return PutDataCatalogEncryptionSettingsCommand;
}($Command));
export { PutDataCatalogEncryptionSettingsCommand };
//# sourceMappingURL=PutDataCatalogEncryptionSettingsCommand.js.map