import { __extends } from "tslib";
import { DeletePackageRequest, DeletePackageResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePackageCommand, serializeAws_restJson1DeletePackageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete the package.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeletePackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeletePackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeletePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePackageCommandInput} for command's `input` shape.
 * @see {@link DeletePackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePackageCommand = /** @class */ (function (_super) {
    __extends(DeletePackageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePackageCommand(input) {
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
    DeletePackageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DeletePackageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePackageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePackageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePackageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePackageCommand(input, context);
    };
    DeletePackageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePackageCommand(output, context);
    };
    return DeletePackageCommand;
}($Command));
export { DeletePackageCommand };
//# sourceMappingURL=DeletePackageCommand.js.map