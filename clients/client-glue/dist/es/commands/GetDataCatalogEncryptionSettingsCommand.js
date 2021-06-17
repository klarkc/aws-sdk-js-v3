import { __extends } from "tslib";
import { GetDataCatalogEncryptionSettingsRequest, GetDataCatalogEncryptionSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand, serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the security configuration for a specified catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDataCatalogEncryptionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataCatalogEncryptionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetDataCatalogEncryptionSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDataCatalogEncryptionSettingsCommand = /** @class */ (function (_super) {
    __extends(GetDataCatalogEncryptionSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDataCatalogEncryptionSettingsCommand(input) {
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
    GetDataCatalogEncryptionSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetDataCatalogEncryptionSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDataCatalogEncryptionSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDataCatalogEncryptionSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDataCatalogEncryptionSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand(input, context);
    };
    GetDataCatalogEncryptionSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand(output, context);
    };
    return GetDataCatalogEncryptionSettingsCommand;
}($Command));
export { GetDataCatalogEncryptionSettingsCommand };
//# sourceMappingURL=GetDataCatalogEncryptionSettingsCommand.js.map