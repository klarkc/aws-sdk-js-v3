import { __extends } from "tslib";
import { UpdateServiceIntegrationRequest, UpdateServiceIntegrationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateServiceIntegrationCommand, serializeAws_restJson1UpdateServiceIntegrationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * 			Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with
 * 			DevOps Guru is AWS Systems Manager, which can be used to create an OpsItem for each generated insight.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new UpdateServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServiceIntegrationCommand = /** @class */ (function (_super) {
    __extends(UpdateServiceIntegrationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServiceIntegrationCommand(input) {
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
    UpdateServiceIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "UpdateServiceIntegrationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServiceIntegrationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateServiceIntegrationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServiceIntegrationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateServiceIntegrationCommand(input, context);
    };
    UpdateServiceIntegrationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateServiceIntegrationCommand(output, context);
    };
    return UpdateServiceIntegrationCommand;
}($Command));
export { UpdateServiceIntegrationCommand };
//# sourceMappingURL=UpdateServiceIntegrationCommand.js.map