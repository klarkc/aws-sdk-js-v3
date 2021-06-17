import { __extends } from "tslib";
import { DeleteServerCatalogRequest, DeleteServerCatalogResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteServerCatalogCommand, serializeAws_json1_1DeleteServerCatalogCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all servers from your server catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteServerCatalogCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteServerCatalogCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteServerCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServerCatalogCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCatalogCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteServerCatalogCommand = /** @class */ (function (_super) {
    __extends(DeleteServerCatalogCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteServerCatalogCommand(input) {
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
    DeleteServerCatalogCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "DeleteServerCatalogCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteServerCatalogRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteServerCatalogResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteServerCatalogCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteServerCatalogCommand(input, context);
    };
    DeleteServerCatalogCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteServerCatalogCommand(output, context);
    };
    return DeleteServerCatalogCommand;
}($Command));
export { DeleteServerCatalogCommand };
//# sourceMappingURL=DeleteServerCatalogCommand.js.map