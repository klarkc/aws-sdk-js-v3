import { __extends } from "tslib";
import { CreateResourcePolicyRequest, CreateResourcePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateResourcePolicyCommand, serializeAws_restJson1CreateResourcePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new resource policy with the specified policy
 *          statements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateResourcePolicyCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateResourcePolicyCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResourcePolicyCommand = /** @class */ (function (_super) {
    __extends(CreateResourcePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResourcePolicyCommand(input) {
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
    CreateResourcePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateResourcePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResourcePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResourcePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResourcePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateResourcePolicyCommand(input, context);
    };
    CreateResourcePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateResourcePolicyCommand(output, context);
    };
    return CreateResourcePolicyCommand;
}($Command));
export { CreateResourcePolicyCommand };
//# sourceMappingURL=CreateResourcePolicyCommand.js.map