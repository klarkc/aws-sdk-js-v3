import { __extends } from "tslib";
import { DeleteLabelsRequest, DeleteLabelsResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteLabelsCommand, serializeAws_restJson1DeleteLabelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified list of labels from a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteLabelsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteLabelsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLabelsCommandInput} for command's `input` shape.
 * @see {@link DeleteLabelsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLabelsCommand = /** @class */ (function (_super) {
    __extends(DeleteLabelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLabelsCommand(input) {
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
    DeleteLabelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DeleteLabelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLabelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLabelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLabelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteLabelsCommand(input, context);
    };
    DeleteLabelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteLabelsCommand(output, context);
    };
    return DeleteLabelsCommand;
}($Command));
export { DeleteLabelsCommand };
//# sourceMappingURL=DeleteLabelsCommand.js.map