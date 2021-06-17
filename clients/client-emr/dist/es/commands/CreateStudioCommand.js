import { __extends } from "tslib";
import { CreateStudioInput, CreateStudioOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateStudioCommand, serializeAws_json1_1CreateStudioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon EMR Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new CreateStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStudioCommandInput} for command's `input` shape.
 * @see {@link CreateStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStudioCommand = /** @class */ (function (_super) {
    __extends(CreateStudioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStudioCommand(input) {
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
    CreateStudioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "CreateStudioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStudioInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStudioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStudioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateStudioCommand(input, context);
    };
    CreateStudioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateStudioCommand(output, context);
    };
    return CreateStudioCommand;
}($Command));
export { CreateStudioCommand };
//# sourceMappingURL=CreateStudioCommand.js.map