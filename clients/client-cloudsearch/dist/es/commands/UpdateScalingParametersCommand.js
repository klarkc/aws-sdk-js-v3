import { __extends } from "tslib";
import { UpdateScalingParametersRequest, UpdateScalingParametersResponse } from "../models/models_0";
import { deserializeAws_queryUpdateScalingParametersCommand, serializeAws_queryUpdateScalingParametersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, UpdateScalingParametersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, UpdateScalingParametersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new UpdateScalingParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScalingParametersCommandInput} for command's `input` shape.
 * @see {@link UpdateScalingParametersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateScalingParametersCommand = /** @class */ (function (_super) {
    __extends(UpdateScalingParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateScalingParametersCommand(input) {
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
    UpdateScalingParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "UpdateScalingParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateScalingParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateScalingParametersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateScalingParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateScalingParametersCommand(input, context);
    };
    UpdateScalingParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateScalingParametersCommand(output, context);
    };
    return UpdateScalingParametersCommand;
}($Command));
export { UpdateScalingParametersCommand };
//# sourceMappingURL=UpdateScalingParametersCommand.js.map