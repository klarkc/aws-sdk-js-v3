import { __extends } from "tslib";
import { DeleteBotChannelAssociationRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteBotChannelAssociationCommand, serializeAws_restJson1DeleteBotChannelAssociationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the association between an Amazon Lex bot and a messaging
 *       platform.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:DeleteBotChannelAssociation</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotChannelAssociationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotChannelAssociationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteBotChannelAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotChannelAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteBotChannelAssociationCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBotChannelAssociationCommand = /** @class */ (function (_super) {
    __extends(DeleteBotChannelAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBotChannelAssociationCommand(input) {
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
    DeleteBotChannelAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "DeleteBotChannelAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBotChannelAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBotChannelAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteBotChannelAssociationCommand(input, context);
    };
    DeleteBotChannelAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteBotChannelAssociationCommand(output, context);
    };
    return DeleteBotChannelAssociationCommand;
}($Command));
export { DeleteBotChannelAssociationCommand };
//# sourceMappingURL=DeleteBotChannelAssociationCommand.js.map