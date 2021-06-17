import { __extends } from "tslib";
import { ImportCatalogToGlueRequest, ImportCatalogToGlueResponse } from "../models/models_1";
import { deserializeAws_json1_1ImportCatalogToGlueCommand, serializeAws_json1_1ImportCatalogToGlueCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports an existing Amazon Athena Data Catalog to AWS Glue</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ImportCatalogToGlueCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ImportCatalogToGlueCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ImportCatalogToGlueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportCatalogToGlueCommandInput} for command's `input` shape.
 * @see {@link ImportCatalogToGlueCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportCatalogToGlueCommand = /** @class */ (function (_super) {
    __extends(ImportCatalogToGlueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportCatalogToGlueCommand(input) {
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
    ImportCatalogToGlueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "ImportCatalogToGlueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportCatalogToGlueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportCatalogToGlueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportCatalogToGlueCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportCatalogToGlueCommand(input, context);
    };
    ImportCatalogToGlueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportCatalogToGlueCommand(output, context);
    };
    return ImportCatalogToGlueCommand;
}($Command));
export { ImportCatalogToGlueCommand };
//# sourceMappingURL=ImportCatalogToGlueCommand.js.map