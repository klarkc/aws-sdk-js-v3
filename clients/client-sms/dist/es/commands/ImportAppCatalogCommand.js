import { __extends } from "tslib";
import { ImportAppCatalogRequest, ImportAppCatalogResponse } from "../models/models_0";
import { deserializeAws_json1_1ImportAppCatalogCommand, serializeAws_json1_1ImportAppCatalogCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows application import from AWS Migration Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, ImportAppCatalogCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, ImportAppCatalogCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new ImportAppCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportAppCatalogCommandInput} for command's `input` shape.
 * @see {@link ImportAppCatalogCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportAppCatalogCommand = /** @class */ (function (_super) {
    __extends(ImportAppCatalogCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportAppCatalogCommand(input) {
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
    ImportAppCatalogCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "ImportAppCatalogCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportAppCatalogRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportAppCatalogResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportAppCatalogCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportAppCatalogCommand(input, context);
    };
    ImportAppCatalogCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportAppCatalogCommand(output, context);
    };
    return ImportAppCatalogCommand;
}($Command));
export { ImportAppCatalogCommand };
//# sourceMappingURL=ImportAppCatalogCommand.js.map