import { __extends } from "tslib";
import { CreateResourcePolicyStatementRequest, CreateResourcePolicyStatementResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateResourcePolicyStatementCommand, serializeAws_restJson1CreateResourcePolicyStatementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a new resource policy statement to a bot or bot alias. If a
 *          resource policy exists, the statement is added to the current resource
 *          policy. If a policy doesn't exist, a new policy is created.</p>
 *          <p>You can create a resource policy statement that allows cross-account
 *          access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link CreateResourcePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResourcePolicyStatementCommand = /** @class */ (function (_super) {
    __extends(CreateResourcePolicyStatementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResourcePolicyStatementCommand(input) {
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
    CreateResourcePolicyStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateResourcePolicyStatementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResourcePolicyStatementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResourcePolicyStatementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResourcePolicyStatementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateResourcePolicyStatementCommand(input, context);
    };
    CreateResourcePolicyStatementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateResourcePolicyStatementCommand(output, context);
    };
    return CreateResourcePolicyStatementCommand;
}($Command));
export { CreateResourcePolicyStatementCommand };
//# sourceMappingURL=CreateResourcePolicyStatementCommand.js.map