import { __extends } from "tslib";
import { DeleteRepositoryRequest, DeleteRepositoryResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteRepositoryCommand, serializeAws_json1_1DeleteRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a repository. If the repository contains images, you must either delete all
 *             images in the repository or use the <code>force</code> option to delete the
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRepositoryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRepositoryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRepositoryCommand = /** @class */ (function (_super) {
    __extends(DeleteRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRepositoryCommand(input) {
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
    DeleteRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "DeleteRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRepositoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRepositoryCommand(input, context);
    };
    DeleteRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRepositoryCommand(output, context);
    };
    return DeleteRepositoryCommand;
}($Command));
export { DeleteRepositoryCommand };
//# sourceMappingURL=DeleteRepositoryCommand.js.map