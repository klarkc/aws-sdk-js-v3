import { __extends } from "tslib";
import { DeleteNamespaceRequest, DeleteNamespaceResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteNamespaceCommand, serializeAws_restJson1DeleteNamespaceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a namespace and the users and groups that are associated with the namespace.
 *         This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not
 *         deleted. To delete these assets, you use the API operations for the relevant asset. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteNamespaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNamespaceCommand = /** @class */ (function (_super) {
    __extends(DeleteNamespaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNamespaceCommand(input) {
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
    DeleteNamespaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteNamespaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteNamespaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNamespaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteNamespaceCommand(input, context);
    };
    DeleteNamespaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteNamespaceCommand(output, context);
    };
    return DeleteNamespaceCommand;
}($Command));
export { DeleteNamespaceCommand };
//# sourceMappingURL=DeleteNamespaceCommand.js.map