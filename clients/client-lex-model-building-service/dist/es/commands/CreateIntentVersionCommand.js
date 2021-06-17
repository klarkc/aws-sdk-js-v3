import { __extends } from "tslib";
import { CreateIntentVersionRequest, CreateIntentVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateIntentVersionCommand, serializeAws_restJson1CreateIntentVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of an intent based on the
 *         <code>$LATEST</code> version of the intent. If the <code>$LATEST</code>
 *       version of this intent hasn't changed since you last updated it, Amazon Lex
 *       doesn't create a new version. It returns the last version you
 *       created.</p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of the
 *         intent. You can't update the numbered versions that you create with the
 *           <code>CreateIntentVersion</code> operation.</p>
 *          </note>
 *          <p> When you create a version of an intent, Amazon Lex sets the version to
 *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *          <p>This operation requires permissions to perform the
 *         <code>lex:CreateIntentVersion</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateIntentVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateIntentVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new CreateIntentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIntentVersionCommandInput} for command's `input` shape.
 * @see {@link CreateIntentVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateIntentVersionCommand = /** @class */ (function (_super) {
    __extends(CreateIntentVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateIntentVersionCommand(input) {
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
    CreateIntentVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "CreateIntentVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateIntentVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateIntentVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateIntentVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateIntentVersionCommand(input, context);
    };
    CreateIntentVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateIntentVersionCommand(output, context);
    };
    return CreateIntentVersionCommand;
}($Command));
export { CreateIntentVersionCommand };
//# sourceMappingURL=CreateIntentVersionCommand.js.map