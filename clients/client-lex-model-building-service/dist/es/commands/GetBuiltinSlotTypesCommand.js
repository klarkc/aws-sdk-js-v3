import { __extends } from "tslib";
import { GetBuiltinSlotTypesRequest, GetBuiltinSlotTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBuiltinSlotTypesCommand, serializeAws_restJson1GetBuiltinSlotTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of built-in slot types that meet the specified
 *       criteria.</p>
 *          <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills
 *         Kit</i>.</p>
 *
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltInSlotTypes</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinSlotTypesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBuiltinSlotTypesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBuiltinSlotTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBuiltinSlotTypesCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinSlotTypesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBuiltinSlotTypesCommand = /** @class */ (function (_super) {
    __extends(GetBuiltinSlotTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBuiltinSlotTypesCommand(input) {
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
    GetBuiltinSlotTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetBuiltinSlotTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBuiltinSlotTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBuiltinSlotTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBuiltinSlotTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBuiltinSlotTypesCommand(input, context);
    };
    GetBuiltinSlotTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBuiltinSlotTypesCommand(output, context);
    };
    return GetBuiltinSlotTypesCommand;
}($Command));
export { GetBuiltinSlotTypesCommand };
//# sourceMappingURL=GetBuiltinSlotTypesCommand.js.map