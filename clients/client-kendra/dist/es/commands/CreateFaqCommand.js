import { __extends } from "tslib";
import { CreateFaqRequest, CreateFaqResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateFaqCommand, serializeAws_json1_1CreateFaqCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an new set of frequently asked question (FAQ) questions and answers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateFaqCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateFaqCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateFaqCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFaqCommandInput} for command's `input` shape.
 * @see {@link CreateFaqCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFaqCommand = /** @class */ (function (_super) {
    __extends(CreateFaqCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFaqCommand(input) {
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
    CreateFaqCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "CreateFaqCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFaqRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFaqResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFaqCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateFaqCommand(input, context);
    };
    CreateFaqCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateFaqCommand(output, context);
    };
    return CreateFaqCommand;
}($Command));
export { CreateFaqCommand };
//# sourceMappingURL=CreateFaqCommand.js.map