import { __extends } from "tslib";
import { DeleteTrustRequest, DeleteTrustResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteTrustCommand, serializeAws_json1_1DeleteTrustCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeleteTrustCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrustCommandInput} for command's `input` shape.
 * @see {@link DeleteTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrustCommand = /** @class */ (function (_super) {
    __extends(DeleteTrustCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrustCommand(input) {
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
    DeleteTrustCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DeleteTrustCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrustRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrustResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrustCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTrustCommand(input, context);
    };
    DeleteTrustCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTrustCommand(output, context);
    };
    return DeleteTrustCommand;
}($Command));
export { DeleteTrustCommand };
//# sourceMappingURL=DeleteTrustCommand.js.map