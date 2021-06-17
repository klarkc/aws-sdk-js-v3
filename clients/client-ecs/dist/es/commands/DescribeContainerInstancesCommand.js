import { __extends } from "tslib";
import { DescribeContainerInstancesRequest, DescribeContainerInstancesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeContainerInstancesCommand, serializeAws_json1_1DescribeContainerInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more container instances. Returns metadata about each container
 * 			instance requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeContainerInstancesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeContainerInstancesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeContainerInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContainerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerInstancesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeContainerInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeContainerInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeContainerInstancesCommand(input) {
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
    DescribeContainerInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DescribeContainerInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeContainerInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeContainerInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeContainerInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeContainerInstancesCommand(input, context);
    };
    DescribeContainerInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeContainerInstancesCommand(output, context);
    };
    return DescribeContainerInstancesCommand;
}($Command));
export { DescribeContainerInstancesCommand };
//# sourceMappingURL=DescribeContainerInstancesCommand.js.map