import { __extends } from "tslib";
import { ListSchemaExtensionsRequest, ListSchemaExtensionsResult } from "../models/models_0";
import { deserializeAws_json1_1ListSchemaExtensionsCommand, serializeAws_json1_1ListSchemaExtensionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all schema extensions applied to a Microsoft AD Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListSchemaExtensionsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListSchemaExtensionsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ListSchemaExtensionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemaExtensionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaExtensionsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSchemaExtensionsCommand = /** @class */ (function (_super) {
    __extends(ListSchemaExtensionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSchemaExtensionsCommand(input) {
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
    ListSchemaExtensionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "ListSchemaExtensionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSchemaExtensionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSchemaExtensionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSchemaExtensionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSchemaExtensionsCommand(input, context);
    };
    ListSchemaExtensionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSchemaExtensionsCommand(output, context);
    };
    return ListSchemaExtensionsCommand;
}($Command));
export { ListSchemaExtensionsCommand };
//# sourceMappingURL=ListSchemaExtensionsCommand.js.map