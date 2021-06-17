import { __extends } from "tslib";
import { GetCatalogImportStatusRequest, GetCatalogImportStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCatalogImportStatusCommand, serializeAws_json1_1GetCatalogImportStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the status of a migration operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCatalogImportStatusCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCatalogImportStatusCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetCatalogImportStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCatalogImportStatusCommandInput} for command's `input` shape.
 * @see {@link GetCatalogImportStatusCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCatalogImportStatusCommand = /** @class */ (function (_super) {
    __extends(GetCatalogImportStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCatalogImportStatusCommand(input) {
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
    GetCatalogImportStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetCatalogImportStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCatalogImportStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCatalogImportStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCatalogImportStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCatalogImportStatusCommand(input, context);
    };
    GetCatalogImportStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCatalogImportStatusCommand(output, context);
    };
    return GetCatalogImportStatusCommand;
}($Command));
export { GetCatalogImportStatusCommand };
//# sourceMappingURL=GetCatalogImportStatusCommand.js.map