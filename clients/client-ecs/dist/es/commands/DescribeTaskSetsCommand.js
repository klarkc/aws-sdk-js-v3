import { __extends } from "tslib";
import { DescribeTaskSetsRequest, DescribeTaskSetsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeTaskSetsCommand, serializeAws_json1_1DescribeTaskSetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the task sets in the specified cluster and service. This is used when a
 * 			service uses the <code>EXTERNAL</code> deployment controller type. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTaskSetsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTaskSetsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeTaskSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTaskSetsCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskSetsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTaskSetsCommand = /** @class */ (function (_super) {
    __extends(DescribeTaskSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTaskSetsCommand(input) {
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
    DescribeTaskSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DescribeTaskSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTaskSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTaskSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTaskSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTaskSetsCommand(input, context);
    };
    DescribeTaskSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTaskSetsCommand(output, context);
    };
    return DescribeTaskSetsCommand;
}($Command));
export { DescribeTaskSetsCommand };
//# sourceMappingURL=DescribeTaskSetsCommand.js.map