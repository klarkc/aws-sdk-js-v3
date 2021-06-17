import { __extends } from "tslib";
import { DeleteReplicationConfigurationTemplateRequest, DeleteReplicationConfigurationTemplateResponse, } from "../models/models_0";
import { deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand, serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a single Replication Configuration Template by ID</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteReplicationConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DeleteReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReplicationConfigurationTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteReplicationConfigurationTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReplicationConfigurationTemplateCommand(input) {
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
    DeleteReplicationConfigurationTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "DeleteReplicationConfigurationTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReplicationConfigurationTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReplicationConfigurationTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReplicationConfigurationTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand(input, context);
    };
    DeleteReplicationConfigurationTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand(output, context);
    };
    return DeleteReplicationConfigurationTemplateCommand;
}($Command));
export { DeleteReplicationConfigurationTemplateCommand };
//# sourceMappingURL=DeleteReplicationConfigurationTemplateCommand.js.map