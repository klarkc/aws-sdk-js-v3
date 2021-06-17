import { __extends } from "tslib";
import { CreateDBClusterEndpointMessage, DBClusterEndpoint } from "../models/models_0";
import { deserializeAws_queryCreateDBClusterEndpointCommand, serializeAws_queryCreateDBClusterEndpointCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "RDSClient";
        var commandName = "CreateDBClusterEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBClusterEndpointMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterEndpoint.filterSensitiveLog,
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