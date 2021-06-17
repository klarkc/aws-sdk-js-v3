import { __extends } from "tslib";
import { DeleteCustomMetadataRequest, DeleteCustomMetadataResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteCustomMetadataCommand, serializeAws_restJson1DeleteCustomMetadataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes custom metadata from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteCustomMetadataCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteCustomMetadataCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteCustomMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomMetadataCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomMetadataCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomMetadataCommand(input) {
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
    DeleteCustomMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DeleteCustomMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCustomMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCustomMetadataCommand(input, context);
    };
    DeleteCustomMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCustomMetadataCommand(output, context);
    };
    return DeleteCustomMetadataCommand;
}($Command));
export { DeleteCustomMetadataCommand };
//# sourceMappingURL=DeleteCustomMetadataCommand.js.map