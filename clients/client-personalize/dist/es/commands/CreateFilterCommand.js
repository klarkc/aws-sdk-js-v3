import { __extends } from "tslib";
import { CreateFilterRequest, CreateFilterResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateFilterCommand, serializeAws_json1_1CreateFilterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a recommendation filter. For more information, see <a>filter</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateFilterCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateFilterCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFilterCommandInput} for command's `input` shape.
 * @see {@link CreateFilterCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFilterCommand = /** @class */ (function (_super) {
    __extends(CreateFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFilterCommand(input) {
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
    CreateFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "CreateFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateFilterCommand(input, context);
    };
    CreateFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateFilterCommand(output, context);
    };
    return CreateFilterCommand;
}($Command));
export { CreateFilterCommand };
//# sourceMappingURL=CreateFilterCommand.js.map