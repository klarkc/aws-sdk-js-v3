import { __extends } from "tslib";
import { UpdateDomainRequest, UpdateDomainResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateDomainCommand, serializeAws_json1_1UpdateDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the default settings for new user profiles in the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateDomainCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateDomainCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainCommand = /** @class */ (function (_super) {
    __extends(UpdateDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDomainCommand(input) {
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
    UpdateDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDomainCommand(input, context);
    };
    UpdateDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDomainCommand(output, context);
    };
    return UpdateDomainCommand;
}($Command));
export { UpdateDomainCommand };
//# sourceMappingURL=UpdateDomainCommand.js.map