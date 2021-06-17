import { __extends } from "tslib";
import { GetBotChannelAssociationRequest, GetBotChannelAssociationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBotChannelAssociationCommand, serializeAws_restJson1GetBotChannelAssociationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the association between an Amazon Lex bot and
 *       a messaging platform.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotChannelAssociation</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotChannelAssociationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotChannelAssociationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotChannelAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotChannelAssociationCommandInput} for command's `input` shape.
 * @see {@link GetBotChannelAssociationCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBotChannelAssociationCommand = /** @class */ (function (_super) {
    __extends(GetBotChannelAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBotChannelAssociationCommand(input) {
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
    GetBotChannelAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetBotChannelAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBotChannelAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBotChannelAssociationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBotChannelAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBotChannelAssociationCommand(input, context);
    };
    GetBotChannelAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBotChannelAssociationCommand(output, context);
    };
    return GetBotChannelAssociationCommand;
}($Command));
export { GetBotChannelAssociationCommand };
//# sourceMappingURL=GetBotChannelAssociationCommand.js.map