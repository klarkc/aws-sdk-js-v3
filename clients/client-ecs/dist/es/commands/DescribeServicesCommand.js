import { __extends } from "tslib";
import { DescribeServicesRequest, DescribeServicesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeServicesCommand, serializeAws_json1_1DescribeServicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified services running in your cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeServicesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeServicesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeServicesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServicesCommand = /** @class */ (function (_super) {
    __extends(DescribeServicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeServicesCommand(input) {
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
    DescribeServicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DescribeServicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeServicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeServicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeServicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeServicesCommand(input, context);
    };
    DescribeServicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeServicesCommand(output, context);
    };
    return DescribeServicesCommand;
}($Command));
export { DescribeServicesCommand };
//# sourceMappingURL=DescribeServicesCommand.js.map