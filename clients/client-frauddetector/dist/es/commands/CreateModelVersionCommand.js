import { __extends } from "tslib";
import { CreateModelVersionRequest, CreateModelVersionResult } from "../models/models_0";
import { deserializeAws_json1_1CreateModelVersionCommand, serializeAws_json1_1CreateModelVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a version of the model using the specified model type and model id.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CreateModelVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelVersionCommandInput} for command's `input` shape.
 * @see {@link CreateModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateModelVersionCommand = /** @class */ (function (_super) {
    __extends(CreateModelVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateModelVersionCommand(input) {
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
    CreateModelVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "CreateModelVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateModelVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateModelVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateModelVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateModelVersionCommand(input, context);
    };
    CreateModelVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateModelVersionCommand(output, context);
    };
    return CreateModelVersionCommand;
}($Command));
export { CreateModelVersionCommand };
//# sourceMappingURL=CreateModelVersionCommand.js.map