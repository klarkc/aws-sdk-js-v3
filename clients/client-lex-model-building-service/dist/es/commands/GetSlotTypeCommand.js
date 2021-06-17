import { __extends } from "tslib";
import { GetSlotTypeRequest, GetSlotTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSlotTypeCommand, serializeAws_restJson1GetSlotTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific version of a slot type. In
 *       addition to specifying the slot type name, you must specify the slot type
 *       version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetSlotType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSlotTypeCommandInput} for command's `input` shape.
 * @see {@link GetSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSlotTypeCommand = /** @class */ (function (_super) {
    __extends(GetSlotTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSlotTypeCommand(input) {
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
    GetSlotTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetSlotTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSlotTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSlotTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSlotTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSlotTypeCommand(input, context);
    };
    GetSlotTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSlotTypeCommand(output, context);
    };
    return GetSlotTypeCommand;
}($Command));
export { GetSlotTypeCommand };
//# sourceMappingURL=GetSlotTypeCommand.js.map