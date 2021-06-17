import { __extends } from "tslib";
import { CreateDBClusterEndpointMessage, CreateDBClusterEndpointOutput } from "../models/models_0";
import { deserializeAws_queryCreateDBClusterEndpointCommand, serializeAws_queryCreateDBClusterEndpointCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterEndpointCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterEndpointCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CreateDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBClusterEndpointCommand = /** @class */ (function (_super) {
    __extends(CreateDBClusterEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBClusterEndpointCommand(input) {
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
    CreateDBClusterEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "CreateDBClusterEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBClusterEndpointMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBClusterEndpointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBClusterEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBClusterEndpointCommand(input, context);
    };
    CreateDBClusterEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBClusterEndpointCommand(output, context);
    };
    return CreateDBClusterEndpointCommand;
}($Command));
export { CreateDBClusterEndpointCommand };
//# sourceMappingURL=CreateDBClusterEndpointCommand.js.map