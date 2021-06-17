import { __extends } from "tslib";
import { CreateSlotTypeVersionRequest, CreateSlotTypeVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSlotTypeVersionCommand, serializeAws_restJson1CreateSlotTypeVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of a slot type based on the
 *         <code>$LATEST</code> version of the specified slot type. If the
 *         <code>$LATEST</code> version of this resource has not changed since the
 *       last version that you created, Amazon Lex doesn't create a new version. It
 *       returns the last version that you created. </p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of a slot
 *         type. You can't update the numbered versions that you create with the
 *           <code>CreateSlotTypeVersion</code> operation.</p>
 *          </note>
 *
 *          <p>When you create a version of a slot type, Amazon Lex sets the version to
 *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *
 *          <p>This operation requires permissions for the
 *         <code>lex:CreateSlotTypeVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new CreateSlotTypeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSlotTypeVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSlotTypeVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSlotTypeVersionCommand = /** @class */ (function (_super) {
    __extends(CreateSlotTypeVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSlotTypeVersionCommand(input) {
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
    CreateSlotTypeVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "CreateSlotTypeVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSlotTypeVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSlotTypeVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSlotTypeVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSlotTypeVersionCommand(input, context);
    };
    CreateSlotTypeVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSlotTypeVersionCommand(output, context);
    };
    return CreateSlotTypeVersionCommand;
}($Command));
export { CreateSlotTypeVersionCommand };
//# sourceMappingURL=CreateSlotTypeVersionCommand.js.map