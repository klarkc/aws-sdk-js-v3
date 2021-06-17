import { __extends } from "tslib";
import { ListModelPackagesInput, ListModelPackagesOutput } from "../models/models_2";
import { deserializeAws_json1_1ListModelPackagesCommand, serializeAws_json1_1ListModelPackagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the model packages that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelPackagesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelPackagesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelPackagesCommandInput} for command's `input` shape.
 * @see {@link ListModelPackagesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListModelPackagesCommand = /** @class */ (function (_super) {
    __extends(ListModelPackagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListModelPackagesCommand(input) {
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
    ListModelPackagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListModelPackagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListModelPackagesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListModelPackagesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListModelPackagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListModelPackagesCommand(input, context);
    };
    ListModelPackagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListModelPackagesCommand(output, context);
    };
    return ListModelPackagesCommand;
}($Command));
export { ListModelPackagesCommand };
//# sourceMappingURL=ListModelPackagesCommand.js.map