import { __extends } from "tslib";
import { GetSlotTypeVersionsRequest, GetSlotTypeVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSlotTypeVersionsCommand, serializeAws_restJson1GetSlotTypeVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about all versions of a slot type.</p>
 *          <p>The <code>GetSlotTypeVersions</code> operation returns a
 *         <code>SlotTypeMetadata</code> object for each version of a slot type.
 *       For example, if a slot type has three numbered versions, the
 *         <code>GetSlotTypeVersions</code> operation returns four
 *         <code>SlotTypeMetadata</code> objects in the response, one for each
 *       numbered version and one for the <code>$LATEST</code> version. </p>
 *          <p>The <code>GetSlotTypeVersions</code> operation always returns at
 *       least one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetSlotTypeVersions</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypeVersionsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetSlotTypeVersionsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetSlotTypeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSlotTypeVersionsCommandInput} for command's `input` shape.
 * @see {@link GetSlotTypeVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSlotTypeVersionsCommand = /** @class */ (function (_super) {
    __extends(GetSlotTypeVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSlotTypeVersionsCommand(input) {
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
    GetSlotTypeVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetSlotTypeVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSlotTypeVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSlotTypeVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSlotTypeVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSlotTypeVersionsCommand(input, context);
    };
    GetSlotTypeVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSlotTypeVersionsCommand(output, context);
    };
    return GetSlotTypeVersionsCommand;
}($Command));
export { GetSlotTypeVersionsCommand };
//# sourceMappingURL=GetSlotTypeVersionsCommand.js.map