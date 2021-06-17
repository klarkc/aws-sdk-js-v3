import { __extends } from "tslib";
import { GetBotChannelAssociationsRequest, GetBotChannelAssociationsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBotChannelAssociationsCommand, serializeAws_restJson1GetBotChannelAssociationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns a list of all of the channels associated with the
 *       specified bot. </p>
 *          <p>The <code>GetBotChannelAssociations</code> operation requires
 *       permissions for the <code>lex:GetBotChannelAssociations</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotChannelAssociationsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotChannelAssociationsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotChannelAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotChannelAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetBotChannelAssociationsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBotChannelAssociationsCommand = /** @class */ (function (_super) {
    __extends(GetBotChannelAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBotChannelAssociationsCommand(input) {
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
    GetBotChannelAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetBotChannelAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBotChannelAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBotChannelAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBotChannelAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBotChannelAssociationsCommand(input, context);
    };
    GetBotChannelAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBotChannelAssociationsCommand(output, context);
    };
    return GetBotChannelAssociationsCommand;
}($Command));
export { GetBotChannelAssociationsCommand };
//# sourceMappingURL=GetBotChannelAssociationsCommand.js.map