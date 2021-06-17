import { __extends } from "tslib";
import { CreateTemplateAliasRequest, CreateTemplateAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateTemplateAliasCommand, serializeAws_restJson1CreateTemplateAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a template alias for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateTemplateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTemplateAliasCommand = /** @class */ (function (_super) {
    __extends(CreateTemplateAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTemplateAliasCommand(input) {
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
    CreateTemplateAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateTemplateAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTemplateAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTemplateAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTemplateAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateTemplateAliasCommand(input, context);
    };
    CreateTemplateAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateTemplateAliasCommand(output, context);
    };
    return CreateTemplateAliasCommand;
}($Command));
export { CreateTemplateAliasCommand };
//# sourceMappingURL=CreateTemplateAliasCommand.js.map