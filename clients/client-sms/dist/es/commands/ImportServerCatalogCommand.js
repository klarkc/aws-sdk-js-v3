import { __extends } from "tslib";
import { ImportServerCatalogRequest, ImportServerCatalogResponse } from "../models/models_0";
import { deserializeAws_json1_1ImportServerCatalogCommand, serializeAws_json1_1ImportServerCatalogCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gathers a complete list of on-premises servers. Connectors must be installed and
 *             monitoring all servers to import.</p>
 *         <p>This call returns immediately, but might take additional time to retrieve all the
 *             servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, ImportServerCatalogCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, ImportServerCatalogCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new ImportServerCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportServerCatalogCommandInput} for command's `input` shape.
 * @see {@link ImportServerCatalogCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportServerCatalogCommand = /** @class */ (function (_super) {
    __extends(ImportServerCatalogCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportServerCatalogCommand(input) {
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
    ImportServerCatalogCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "ImportServerCatalogCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportServerCatalogRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportServerCatalogResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportServerCatalogCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportServerCatalogCommand(input, context);
    };
    ImportServerCatalogCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportServerCatalogCommand(output, context);
    };
    return ImportServerCatalogCommand;
}($Command));
export { ImportServerCatalogCommand };
//# sourceMappingURL=ImportServerCatalogCommand.js.map