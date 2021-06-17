import { __extends } from "tslib";
import { UpdateResourceCollectionRequest, UpdateResourceCollectionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateResourceCollectionCommand, serializeAws_restJson1UpdateResourceCollectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Updates the collection of resources that DevOps Guru analyzes.
 * 			The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
 *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. This method also creates the IAM role required for you
 * 			to use DevOps Guru. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateResourceCollectionCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateResourceCollectionCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new UpdateResourceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceCollectionCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCollectionCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResourceCollectionCommand = /** @class */ (function (_super) {
    __extends(UpdateResourceCollectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResourceCollectionCommand(input) {
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
    UpdateResourceCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "UpdateResourceCollectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResourceCollectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResourceCollectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResourceCollectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateResourceCollectionCommand(input, context);
    };
    UpdateResourceCollectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateResourceCollectionCommand(output, context);
    };
    return UpdateResourceCollectionCommand;
}($Command));
export { UpdateResourceCollectionCommand };
//# sourceMappingURL=UpdateResourceCollectionCommand.js.map