import { __extends } from "tslib";
import { CreateAcceleratorRequest, CreateAcceleratorResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAcceleratorCommand, serializeAws_json1_1CreateAcceleratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic
 * 			to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p>
 * 		       <important>
 * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 				US West (Oregon) Region to create or update accelerators.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAcceleratorCommandInput} for command's `input` shape.
 * @see {@link CreateAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAcceleratorCommand = /** @class */ (function (_super) {
    __extends(CreateAcceleratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAcceleratorCommand(input) {
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
    CreateAcceleratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "CreateAcceleratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAcceleratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAcceleratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAcceleratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAcceleratorCommand(input, context);
    };
    CreateAcceleratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAcceleratorCommand(output, context);
    };
    return CreateAcceleratorCommand;
}($Command));
export { CreateAcceleratorCommand };
//# sourceMappingURL=CreateAcceleratorCommand.js.map