import { __extends } from "tslib";
import { GetContainerServiceDeploymentsRequest, GetContainerServiceDeploymentsResult } from "../models/models_0";
import { deserializeAws_json1_1GetContainerServiceDeploymentsCommand, serializeAws_json1_1GetContainerServiceDeploymentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the deployments for your Amazon Lightsail container service</p>
 *
 *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
 *       that are deployed to your container service.</p>
 *
 *          <p>The deployments are ordered by version in ascending order. The newest version is listed at
 *       the top of the response.</p>
 *
 *          <note>
 *             <p>A set number of deployments are kept before the oldest one is replaced with the newest
 *         one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
 *           endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceDeploymentsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceDeploymentsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServiceDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerServiceDeploymentsCommand = /** @class */ (function (_super) {
    __extends(GetContainerServiceDeploymentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerServiceDeploymentsCommand(input) {
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
    GetContainerServiceDeploymentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetContainerServiceDeploymentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerServiceDeploymentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContainerServiceDeploymentsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerServiceDeploymentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContainerServiceDeploymentsCommand(input, context);
    };
    GetContainerServiceDeploymentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContainerServiceDeploymentsCommand(output, context);
    };
    return GetContainerServiceDeploymentsCommand;
}($Command));
export { GetContainerServiceDeploymentsCommand };
//# sourceMappingURL=GetContainerServiceDeploymentsCommand.js.map