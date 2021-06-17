import { __extends } from "tslib";
import { DescribeManagedEndpointRequest, DescribeManagedEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeManagedEndpointCommand, serializeAws_restJson1DescribeManagedEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new DescribeManagedEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeManagedEndpointCommand = /** @class */ (function (_super) {
    __extends(DescribeManagedEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeManagedEndpointCommand(input) {
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
    DescribeManagedEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "DescribeManagedEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeManagedEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeManagedEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeManagedEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeManagedEndpointCommand(input, context);
    };
    DescribeManagedEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeManagedEndpointCommand(output, context);
    };
    return DescribeManagedEndpointCommand;
}($Command));
export { DescribeManagedEndpointCommand };
//# sourceMappingURL=DescribeManagedEndpointCommand.js.map