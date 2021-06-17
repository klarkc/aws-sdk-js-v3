import { __extends } from "tslib";
import { DescribeServiceIntegrationRequest, DescribeServiceIntegrationResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeServiceIntegrationCommand, serializeAws_restJson1DescribeServiceIntegrationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * 			Returns the integration status of services that are integrated with DevOps Guru.
 * 			The one service that can be integrated with DevOps Guru
 *       	is AWS Systems Manager, which can be used to create an OpsItem for each generated insight.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServiceIntegrationCommand = /** @class */ (function (_super) {
    __extends(DescribeServiceIntegrationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeServiceIntegrationCommand(input) {
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
    DescribeServiceIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "DescribeServiceIntegrationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeServiceIntegrationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeServiceIntegrationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeServiceIntegrationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeServiceIntegrationCommand(input, context);
    };
    DescribeServiceIntegrationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeServiceIntegrationCommand(output, context);
    };
    return DescribeServiceIntegrationCommand;
}($Command));
export { DescribeServiceIntegrationCommand };
//# sourceMappingURL=DescribeServiceIntegrationCommand.js.map