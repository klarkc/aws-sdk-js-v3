import { __extends } from "tslib";
import { CreateManagedEndpointRequest, CreateManagedEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateManagedEndpointCommand, serializeAws_restJson1CreateManagedEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new CreateManagedEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateManagedEndpointCommand = /** @class */ (function (_super) {
    __extends(CreateManagedEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateManagedEndpointCommand(input) {
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
    CreateManagedEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "CreateManagedEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateManagedEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateManagedEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateManagedEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateManagedEndpointCommand(input, context);
    };
    CreateManagedEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateManagedEndpointCommand(output, context);
    };
    return CreateManagedEndpointCommand;
}($Command));
export { CreateManagedEndpointCommand };
//# sourceMappingURL=CreateManagedEndpointCommand.js.map