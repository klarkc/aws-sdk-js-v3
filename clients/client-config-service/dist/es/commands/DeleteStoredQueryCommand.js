import { __extends } from "tslib";
import { DeleteStoredQueryRequest, DeleteStoredQueryResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteStoredQueryCommand, serializeAws_json1_1DeleteStoredQueryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the stored query for a single AWS account and a single AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteStoredQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStoredQueryCommandInput} for command's `input` shape.
 * @see {@link DeleteStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStoredQueryCommand = /** @class */ (function (_super) {
    __extends(DeleteStoredQueryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStoredQueryCommand(input) {
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
    DeleteStoredQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteStoredQueryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStoredQueryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStoredQueryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStoredQueryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteStoredQueryCommand(input, context);
    };
    DeleteStoredQueryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteStoredQueryCommand(output, context);
    };
    return DeleteStoredQueryCommand;
}($Command));
export { DeleteStoredQueryCommand };
//# sourceMappingURL=DeleteStoredQueryCommand.js.map