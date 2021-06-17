import { __extends } from "tslib";
import { CreateVariableRequest, CreateVariableResult } from "../models/models_0";
import { deserializeAws_json1_1CreateVariableCommand, serializeAws_json1_1CreateVariableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a variable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CreateVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVariableCommandInput} for command's `input` shape.
 * @see {@link CreateVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVariableCommand = /** @class */ (function (_super) {
    __extends(CreateVariableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVariableCommand(input) {
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
    CreateVariableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "CreateVariableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVariableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVariableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVariableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateVariableCommand(input, context);
    };
    CreateVariableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateVariableCommand(output, context);
    };
    return CreateVariableCommand;
}($Command));
export { CreateVariableCommand };
//# sourceMappingURL=CreateVariableCommand.js.map